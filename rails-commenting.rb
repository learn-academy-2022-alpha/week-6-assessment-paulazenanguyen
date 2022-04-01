# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The line below this just says that BlogPostsController is inherinting from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) You're creating an instance variable that will show all the data entries for that model
    @posts = BlogPost.all
  end

  # ---3)In this method show, which normally shows a URL at a time, is finding a certain entry that corresponds with the primary key
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)the route for new will offers a form that create new item. It'll create a form but it will not create a new entry of data. that's where create comes from.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)when you are creating and saving actual data into your database you are going to make sure that it is valid. You wouldn't want any invalid data saved into your database. this goes for line 7 as well. you notice that in the parenthesis there is a blog post params. That is defined at the bottom of the page. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) When editing, you're wondering which one to edit. since there are so many you would need the param because you'd be able to call on any (dynamic). then you would edit from there.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)Right here you are using validations and basically it will only accept data that is valid. You would only want valid data entered into the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) In the destroy method it is going to delete something. Once it's deleted at the code below it will redirect you to the "home" page.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) without the word private from line from below so that it won't be accessible by your user
  private
  def blog_post_params
    # ---10) What this line is saying is... "hey you need this in order to pass but if you don't I will throw an error". It forces the user to comply.
    params.require(:blog_post).permit(:title, :content)
  end
end
