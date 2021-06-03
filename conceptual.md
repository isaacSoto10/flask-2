`### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
  A route that provides maping from http (get, post, put, delete, patch) to controller crud actions(create, read, update, delete. destroy)

- What is a resource?
   a resource is something that can be stored on a computer and represented as a stream of bits: a document, a row in a database, or the result of running an algorithm.
   What i got from internet:
   A resource is anything that’s important enough to be referenced as a thing in itself. If your users might “want to create a hypertext link to it, make or refute assertions about it, retrieve or cache a representation of it, include all or part of it by reference into another representation, annotate it, or perform other operations on it”, then you should make it a resource.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

- What does idempotent mean? Which HTTP verbs are idempotent?
  an HTTP method is idempotent id an identical request can be made once or several times in a row with the same result while leaving the server in the same state.
  GET, HEAD, PUT, DELETE are idempotent

- What is the difference between PUT and PATCH?
  Put: replace the Resource
  PATCH: Modify the existing Resource
  

- What is one way encryption?
  a cryptographic algorithm that turns an arbitrary-length input into a fixed-length binary value, and this transformation is one-way, that is, given a hash value it is statistically infeasible to re-create a document that would produce this value. ... If the hashes match the user is authenticated.
  one-way encryption is a handy way to encrypt user passwords in databases.


- What is the purpose of a `salt` when hashing a password?
  A cryptographic salt is made up of random bits added to each password instance before its hashing. Salts create unique passwords even in the instance of two users choosing the same passwords. Salts help us mitigate hash table attacks by forcing attackers to re-compute them using the salts for each user.


- What is the purpose of the Bcrypt module?
  The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.

- What is the difference between authorization and authentication?
  Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.
