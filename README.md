GymClub Project Documentation

Developed by Antônio M. Souza


Purpose of the website

Gym Club was initially developed for presentation at the end of the Web Programming course at the Southern Rio Grande Federal Institute. However, it evolved into a personal project where I dedicated the entire year of 2023 to its development, concurrently enhancing my proficiency in JS, PHP, and MySQL through coursework. The primary objective of this website is to showcase my programming skills and, to a significant extent, my design capabilities—everything was crafted by me.

Target Audience

The target audience comprises individuals who may be seeking assistance in JS and PHP, including my classmates, companies interested in my skills, and the fitness community. This is particularly relevant as my website is designed for a gym.

Site Architecture

In the creation of this website, organization has always been a paramount factor. I believe that the reason for the success of this site lies in its well-structured organization. This is particularly noteworthy as it marks my first experience working with such a large number of files and a database simultaneously.
I have categorized HTML files within .php in the main folder. The 'js' folder contains JavaScript files, while the 'css' folder encompasses the site's stylizations. Additionally, there are folders holding the images used and the Font Awesome Icons. Users have the option to assign an image to their profile on the website, and for this purpose, I created a folder named 'ImageUsers' for the user-inserted images.
Another essential component is the 'app' folder, housing session files where I handle logouts and retrieve information such as email and username of registered users. The 'bd' folder contains the database used in this project. Lastly, but not least, the 'api' folder is where all verifications, tests, insertions, transmissions, updates, and deletions within the site take place. The PHP files located there facilitate the integration of the Front-End with the Database.

Attached below is an outline of the folder structure

<img src="/folder.png">

The database contains four tables, namely

- admin
- coments
- products
- users

Design and Layout

The design and layout were created by me using the free tool Canva, along with tests conducted throughout the project development. I consistently employed darker colors such as blue, black, and gray. I found it beneficial to adhere to this color scheme to maintain a cohesive appearance across all pages, avoiding disparate colorations.

Maintenance and Updates:

To update the website, you will have access to the admin panel, which can be found by searching for gymclub/admin.php in your browser's address bar. There, you have access to tables and can add, remove, or modify anything necessary to proceed with the website.

Navigation
Index: You have a navigation bar that includes Planning, Plans, and even a calculator to determine if you're at your ideal weight.

Home Page:  The sidebar provides access to site reviews and links to my Github. Additionally, there is access to an initial workout, a search bar to assist in finding specific products, and at the bottom, information about me and the website's year of creation.


Content

The user can view their weight, register on our site, choose their plan, utilize our initial workout, purchase quality products, add a profile picture, and provide a site review with text and a rating from 0 to 10. I prioritize quality, so I always strive to include images with high resolutions and suitable sizes for optimal viewing.

Security

Users can have confidence in the security of their passwords, as we employ encryption to protect them. Additionally, email addresses undergo verification to ensure correct input. We utilize the POST method when submitting forms to securely send information to our database. In user reviews, only the name is visible to other users; no email addresses or passwords are disclosed. Administrators have full access to delete any accounts found to be associated with malicious intent.

SEO (Search Engine Optimization)

To facilitate user accessibility, I aimed to define easily searchable names in the URL bar. I will provide examples

index,
login,
register,
homePage,
checkout,
reviews,
profile

Support and Contact

To get in touch with me, you can find me on LinkedIn and GitHub.
Linkedin: https://www.linkedin.com/in/antoniomsouza2/
Github: https://github.com/AntonioMartinss
