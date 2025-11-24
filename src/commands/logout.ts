import * as clack from '@clack/prompts';
import chalk from 'chalk';
import { banner } from '../utils/banner.js';
import { clearCredentials, hasCredentials } from '../utils/auth.js';

export const logout = async () => {
	banner();
	clack.intro(chalk.hex('#00BCF2')('LOGOUT FROM MVP'));

	if (!hasCredentials()) {
		clack.log.warn('No credentials found. You are already logged out.');
		clack.outro(chalk.dim('Nothing to do.'));
		process.exit(0);
	}

	const shouldLogout = await clack.confirm({
		message: 'Are you sure you want to logout and delete your credentials?'
	});

	if (clack.isCancel(shouldLogout) || !shouldLogout) {
		clack.cancel('Operation cancelled.');
		process.exit(0);
	}

	clearCredentials();

	clack.outro(chalk.green('✓ Logged out successfully! Credentials deleted.'));
};
