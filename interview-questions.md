# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The funny thing is I've been avoiding this question because I couldn't figure it out. Well I understood the questions but I couldn't really find the answer. Yesterday while I was working on the wildlife project I did the exact same thing this question described. That would be because I have happy fingers but I'm glad I was able to get over that. What you would do is to create a generate a migration. Inside that migration file you will add a column and make sure that you specify which model you'd like to add the column too. Then add the 'nameoftable_id' and the datatype. For this case, the name of the foreign key will be cohort_id and the datatype should be integer. The foreign key should be on the students model. Three components. Once you are done you will save the file and go to your terminal. In the terminal you will do $rails db:migrate.

  Researched answer: You would create a migration file in the terminal. Then you would enter that migration file. You will add inside the method (add_column :students, :cohort_id, :integer). Once you are done you will save that file and go into your terminal. In the terminal you will generate this command $rails db:migrate. Then that should be it!



2. Which RESTful routes must always be passed params? Why?

  Your answer: In the RESTful routes there are two routes that need params are update and edit. They both need a param because since ruby on rails is a multi-url application. You don't want to repeat yourself when you're coding so we could use params to make one execution of code that can be applied to other websites.

  Researched answer: When you are creating RESTful routes that need paramaters its really important to include parameters in order make it dynamic. That is the main reason why we use parameters. You would also need it because it needs to know which information to select and either update, edit, or destroy. 



3. Name three rails generator commands. What is created by each?

  Your answer: The three rails generator commands that we can use are the model, controller, and view. When you want to use a command line that will create all three at once would be the resource.

  Researched answer: I couldn't find much on this question but I am sure that the answer is somewhat right. Using the generate resource command is a bit different from the other individual rails command because it will also be able to create resources in the routes.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students
the controller method name would be idex and it will show will display all the entries          

action: "POST"   location: /students
the controller method name would be create and it will take any information with the restrictions and create a new entry into the database. It should be displayed as well with the index all.        

action: "GET"    location: /students/new
the controller method name would be new and what it will do it display a form where you can input information. This action is only surface level so it won't make it and put it into stone. That is create's job.

action: "GET"    location: /students/2
the controller method name would be show and just like index it would show but only one at a time so it would need a primary to display it. Normally to make it dynamic you would take in params:id.  

action: "GET"    location: /students/2/edit
the controller method name for this one would be edit and it will offer a form so that you can edit. It's just a form so updating would be a seperate thing.  

action: "PATCH"  location: /students/2
the controller method name would be update and it will update specific item on the server     

action: "DELETE" location: /students/2
the method name should be destroy and what it would do it destroy entry.

(please if i am using the terminology let me know. I know to be confident when I am talking about this stuff. Knowing that I know the vocab makes me more confident.)



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

as a user I can see all the lists of items on my to do lists
as a user I can click on the item of the list and be routed to another page with the description
as a user i can navigate from the show page and home page
as a user i see a form where I can create a new to do item
as a user I can click a button that will take me from the home page to the create form
as a user i can go from the form page to the home page
as a user i can click a button that will submit my to do item to the database
as a user when I submit my post it can refresh the page to the home page
as a user i can delete a to do item
as a user i can update a blog item
