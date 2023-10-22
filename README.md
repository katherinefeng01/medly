## Medly

Medly is a social platform designed to simplfy online diagnoses by bringing together patients and doctors.

### Homepage 
AI-driven feed that allows patients to see the healthcare content they care about. 

### Find my doctor 
Page that allows users to search for doctors on a map or list, based on their location; requires geolocation capabilities 

### Search 
AI-driven search algorithm (need to think of some sort of vector db to store every post, ex. Elasticsearch)

### Two types of user profiles
1. Patients (anonymous profile)
2. Doctors (public profile): requires MD to join; must submit education, insurance, specialty, location, and affiliated hospital (publicly shown in bio); blue check mark to signal verification; previous activity (posts and comments) must be visible; ability to book appointment via app

### Authentication 
1. Face-ID required for all users; verified email and phone

### Security 
1. Data must be encrypted in transit (HTTPS) and at rest
2. Ability to flag photos that are inapropriate, or show users' faces
3. Users are not allowed to post photos with their faces, or use their real name in the app
4. Users are not allowed to screenshot or screenrecord; if they do, black screen (like Netflix)

### Storage 
1. AWS storage options: S3 bucket, DynamoDB table, SQL db -- Aurora, Redshift, etc.
2. Storage needs to be scalable and easily extractable for customization/reccomendation insights -- i.e., possibly use this data to better curate user feed
