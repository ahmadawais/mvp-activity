import * as readline from 'node:readline';
import chalk from 'chalk';

export const readMultilineInput = (): Promise<string> => {
	return new Promise((resolve) => {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
			terminal: false
		});

		let input = '';
		let lineCount = 0;

		console.log(chalk.dim('◆ Paste the cURL command and press Enter'));
		console.log(chalk.dim('  (Reading input...)'));
		console.log('');

		rl.on('line', (line) => {
			if (lineCount === 0) {
				input = line;
			} else {
				input += ' ' + line;
			}
			lineCount++;
		});

		rl.on('close', () => {
			resolve(input.trim());
		});

		setTimeout(() => {
			rl.close();
		}, 100);
	});
};
