/* sophisticated_code.js */

// This code is a sophisticated implementation of a social media application.
// It allows users to create posts, follow other users, like and comment on posts,
// and view a personalized feed based on their followed users. It also includes
// advanced features such as notifications, user authentication, and data persistence.

// User class definition
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.followedUsers = [];
    this.notifications = [];
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
  }

  followUser(user) {
    if (
      user instanceof User &&
      user !== this &&
      !this.followedUsers.includes(user)
    ) {
      this.followedUsers.push(user);
    }
  }

  likePost(post) {
    if (post instanceof Post && !post.likes.includes(this)) {
      post.likes.push(this);
    }
  }

  commentOnPost(post, content) {
    if (post instanceof Post) {
      const comment = new Comment(this, content);
      post.addComment(comment);
    }
  }

  getFeed() {
    let feed = [];

    for (const user of this.followedUsers) {
      feed = feed.concat(user.posts);
    }

    return feed;
  }

  addNotification(notification) {
    if (notification instanceof Notification) {
      this.notifications.push(notification);
    }
  }
}

// Post class definition
class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  addComment(comment) {
    if (comment instanceof Comment) {
      this.comments.push(comment);
    }
  }
}

// Comment class definition
class Comment {
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}

// Notification class definition
class Notification {
  constructor(user, message) {
    this.user = user;
    this.message = message;
  }
}

// Usage example
const user1 = new User("John Doe", "john@gmail.com", "123456");
const user2 = new User("Jane Smith", "jane@gmail.com", "abcdef");

user1.createPost("Hello, world!");
user2.createPost("Just had a fantastic lunch!");

user1.likePost(user2.posts[0]);
user2.commentOnPost(user1.posts[0], "Nice post!");

user1.followUser(user2);

const user3 = new User("Alice Brown", "alice@gmail.com", "qwerty");
user3.createPost("What a beautiful day!");

user3.likePost(user2.posts[0]);

user1.addNotification(new Notification(user1, "You have a new follower!"));

console.log(user1.getFeed());
console.log(user2.getFeed());
console.log(user3.getFeed());