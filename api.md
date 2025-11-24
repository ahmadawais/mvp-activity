# API Documentation

This document covers both **Microsoft MVP API** and **Google GDE API (Advocu)**.

---

# Microsoft MVP API

## Base URL
```
https://mavenapi-prod.azurewebsites.net/api
```

## Authentication
```
Authorization: Bearer <token>
```

## Endpoint: POST /Activities/

### Request Format

The activity must be wrapped in an `activity` object:

```json
{
  "activity": {
    // ... activity fields
  }
}
```

### Required Headers

```
Content-Type: application/json
Authorization: Bearer <token>
Referer: https://mvp.microsoft.com/
Origin: https://mvp.microsoft.com
```

---

## MVP Activity Types

### Video

**Activity Type**: `"Video"`

**Valid Roles**: `"Host"`, `"Presenter"`, `"Speaker"`

| Name | Type | Description | Restrictions |
|------|------|-------------|-------------|
| id | integer | Activity ID | Always 0 for new activities |
| activityTypeName | string | Activity type | Must be "Video" |
| typeName | string | Type name | Must be "Video" |
| date | string | Publication date | ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) |
| title | string | Video title | min 1, max 100 characters |
| description | string | Description | max 1000 characters |
| url | string | Video URL | Must start with https:// |
| isPrivate | boolean | Private activity | true/false |
| targetAudience | array | Target audiences | enum: Developer, Technical Decision Maker, Business Decision Maker, Student, IT Pro, End User |
| tenant | string | Tenant | Always "MVP" |
| userProfileId | integer | Your profile ID | Your MVP profile ID |
| role | string | Your role | enum: Host, Presenter, Speaker |
| technologyFocusArea | string | Main tech area | e.g., "Web Development", "Cloud & AI" |
| additionalTechnologyAreas | array | Additional areas | Always empty array [] |
| liveStreamViews | integer | Livestream views | minimum 0 |
| onDemandViews | integer | On-demand views | minimum 0 |
| numberOfSessions | integer | Number of sessions | minimum 1, default 1 |
| inPersonAttendees | integer | In-person attendees | Always 0 for videos |
| subscriberBase | integer | Subscriber base | Always 0 for videos |
| imageUrl | string | Image URL | Empty string "" |

**Example**:
```json
{
  "activity": {
    "id": 0,
    "activityTypeName": "Video",
    "typeName": "Video",
    "date": "2025-07-10T00:00:00.000Z",
    "title": "Como TERMINAR con el drama de Angular 20",
    "description": "Video tutorial explicando como resolver problemas comunes en Angular 20...",
    "url": "https://www.youtube.com/watch?v=OXlWMbrGgxk",
    "isPrivate": false,
    "targetAudience": ["Developer"],
    "tenant": "MVP",
    "userProfileId": 399243,
    "role": "Host",
    "technologyFocusArea": "Web Development",
    "additionalTechnologyAreas": [],
    "liveStreamViews": 0,
    "onDemandViews": 8619,
    "numberOfSessions": 1,
    "inPersonAttendees": 0,
    "subscriberBase": 0,
    "imageUrl": ""
  }
}
```

**Response** (201 Created):
```json
{
  "contributionId": 351180
}
```

---

### Blog

**Activity Type**: `"Blog"`

**Valid Roles**: `"Author"`, `"Co-Author"`, `"Contributor"`

| Name | Type | Description | Restrictions |
|------|------|-------------|-------------|
| id | integer | Activity ID | Always 0 for new |
| activityTypeName | string | Activity type | Must be "Blog" |
| typeName | string | Type name | Must be "Blog" |
| date | string | Publication date | ISO 8601 format |
| title | string | Blog title | min 1, max 100 |
| description | string | Description | max 1000 |
| url | string | Blog URL | https:// |
| isPrivate | boolean | Private | - |
| targetAudience | array | Audiences | See Video section |
| tenant | string | Tenant | "MVP" |
| userProfileId | integer | Profile ID | Your ID |
| role | string | Role | Author, Co-Author, Contributor |
| technologyFocusArea | string | Tech area | - |
| additionalTechnologyAreas | array | Additional | [] |
| numberOfViews | integer | Total views | minimum 0 |
| subscriberBase | integer | Subscribers | minimum 0 |
| imageUrl | string | Image | "" |

---

### Speaking (Conference)

**Activity Type**: `"Speaking (Conference)"`

**Valid Roles**: `"Speaker"`, `"Panelist"`, `"Moderator"`, `"Presenter"`

| Name | Type | Description | Restrictions |
|------|------|-------------|-------------|
| id | integer | Activity ID | Always 0 |
| activityTypeName | string | Activity type | "Speaking (Conference)" |
| typeName | string | Type name | "Speaking" |
| date | string | Event date | ISO 8601 |
| title | string | Talk title | min 1, max 100 |
| description | string | Description | max 1000 |
| url | string | Event URL | https:// |
| isPrivate | boolean | Private | - |
| targetAudience | array | Audiences | See Video section |
| tenant | string | Tenant | "MVP" |
| userProfileId | integer | Profile ID | Your ID |
| role | string | Role | Speaker, Panelist, Moderator, Presenter |
| technologyFocusArea | string | Tech area | - |
| additionalTechnologyAreas | array | Additional | [] |
| inPersonAttendees | integer | In-person | minimum 0 |
| numberOfSessions | integer | Sessions | minimum 1 |
| liveStreamViews | integer | Stream views | minimum 0 (optional) |
| onDemandViews | integer | On-demand | minimum 0 (optional) |
| imageUrl | string | Image | "" |

---

### Book/E-book

**Activity Type**: `"Book/E-book"`

**Valid Roles**: `"Author"`, `"Co-Author"`

| Name | Type | Description | Restrictions |
|------|------|-------------|-------------|
| id | integer | Activity ID | Always 0 |
| activityTypeName | string | Activity type | "Book/E-book" |
| typeName | string | Type name | "Book/E-book" |
| date | string | Publication date | ISO 8601 |
| title | string | Book title | min 1, max 100 |
| description | string | Description | max 1000 |
| url | string | Book URL | https:// |
| isPrivate | boolean | Private | - |
| targetAudience | array | Audiences | See Video section |
| tenant | string | Tenant | "MVP" |
| userProfileId | integer | Profile ID | Your ID |
| role | string | Role | Author, Co-Author |
| technologyFocusArea | string | Tech area | - |
| additionalTechnologyAreas | array | Additional | [] |
| numberOfViews | integer | Readers/downloads | minimum 0 |
| subscriberBase | integer | Subscribers | minimum 0 |
| copiesSold | integer | Copies sold | minimum 0 |
| imageUrl | string | Image | "" |

---

## All MVP Activity Types

```
"Blog"
"Book/E-book"
"Code Project/Sample"
"Conference (booth)"
"Conference (organizer)"
"Forum Moderator"
"Forum Participation (3rd Party Forums)"
"Forum Participation (Microsoft Forums)"
"Mentorship"
"Open Source Project(s)"
"Other"
"Product Group Feedback"
"Site Owner"
"Speaking (Conference)"
"Speaking (Local Event / User Group / Meetup)"
"Speaking (Microsoft Event)"
"Technical Social Media (Twitter, Facebook, LinkedIn...)"
"Translation Review, Feedback and Editing"
"Video"
"Workshop"
```

---

## MVP Target Audiences

```
"Developer"
"Technical Decision Maker"
"Business Decision Maker"
"Student"
"IT Pro"
"End User"
```

---

## Technology Focus Areas (Examples)

```
"Web Development"
"Cloud & AI"
"Developer Tools"
"Mobile Development"
"Data & Analytics"
"Security"
"DevOps"
"IoT"
"Machine Learning"
"Blockchain"
```
