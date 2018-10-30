# Poll Position

## A backend for a Poll-Style app using Node, GraphQL, Prisma and Typscript

## Query

### User Queries

#### User Profile

```graphql
query {
  me {
    id
    firstName
    lastName
    email
  }
}
```

#### User's Created Polls

```graphql
query {
  me {
    polls {
      id
      title
      description
      options {
        id
        description
        votes {
          id
          creator {
            id
          }
        }
      }
    }
  }
}
```

#### User's Polls Votes

```graphql
query {
  me {
    votes {
      id
      poll {
        id
        title
        description
      }
      option {
        id
        description
      }
    }
  }
}
```

#### User's Polls Voted

```graphql
query {
  me {
    voted {
      id
      title
      description
    }
  }
}
```

### Poll Queries

#### User's Published Polls

```graphql
query {
  publishedUserPolls {
    id
    title
    description
    options {
      id
      description
      votes {
        id
        creator {
          id
        }
      }
    }
  }
}
```

#### User's Unpublished Polls

```graphql
query {
  unpublishedUserPolls {
    id
    title
    description
    options {
      id
      description
      votes {
        id
        creator {
          id
        }
      }
    }
  }
}
```

#### Public Polls

```graphql
query {
  allPublicPolls {
    id
    title
    description
    options {
      id
      description
      votes {
        id
        creator {
          id
        }
      }
    }
  }
}
```

#### Private Polls

```graphql
query {
  allPrivatePolls {
    id
    title
    description
    options {
      id
      description
      votes {
        id
        creator {
          id
        }
      }
    }
  }
}
```

#### Poll

```graphql
query {
  poll(id: "cjnuo97s6001e0798d1pery77") {
    id
    title
    description
    options {
      id
      description
      votes {
        id
        creator {
          id
        }
      }
    }
  }
}
```

## Mutation

### User Mutations

#### Register

```graphql
mutation {
  register(
    firstName: "Dwayne"
    lastName: "Edwards"
    email: "dwayne@pollposition.com"
    password: "gr34tP@s5w0rD!123"
  ) {
    token
  }
}
```

#### Login

```graphql
mutation {
  login(email: "dwayne@pollposition.com", password: "gr34tP@s5w0rD!123") {
    token
  }
}
```

### Poll Mutations

#### Create Poll

```graphql
mutation {
  createPoll(
    title: "New Years Eve!"
    description: "What to do for New Years Eve?"
    options: ["New York", "Miami", "Las Vegas", "Los Angeles"]
    recipients: [
      "alisha@pollposition.com"
      "kareem@pollposition.com"
      "chad@pollposition.com"
      "shonnet@pollposition.com"
    ]
    access: PRIVATE
  ) {
    id
  }
}
```

#### Update Poll Title

```graphql
mutation {
  updatePollTitle(title: "New Years Eve!") {
    id
  }
}
```

#### Update Poll Description

```graphql
mutation {
  updatePollDescription(description: "What to do for New Years Eve?") {
    id
  }
}
```

#### Update Poll Title And Description

```graphql
mutation {
  updatePollTitleAndDescription(
    title: "New Years Eve!"
    description: "What to do for New Years Eve?"
  ) {
    id
  }
}
```

#### Update Poll Access

```graphql
mutation {
  closePoll(id: "cjnuo97s6001e0798d1pery77") {
    id
  }
}
```

#### Delete Poll

```graphql
mutation {
  deletePoll(id: "cjnuo97s6001e0798d1pery77") {
    id
  }
}
```

#### Publish Poll

```graphql
mutation {
  publishPoll(id: "cjnuo97s6001e0798d1pery77") {
    id
  }
}
```

#### Unpublish Poll

```graphql
mutation {
  unpublishPoll(id: "cjnuo97s6001e0798d1pery77") {
    id
  }
}
```

#### Close Poll

```graphql
mutation {
  closePoll(id: "cjnuo97s6001e0798d1pery77") {
    id
  }
}
```

### Poll Recipient Mutations

#### Add Poll Recipients

```graphql
mutation {
  addPollRecipients(
    id: "cjnuo97s6001e0798d1pery77"
    recipients: [
      "alisha@pollposition.com"
      "kareem@pollposition.com"
      "chad@pollposition.com"
      "shonnet@pollposition.com"
    ]
  ) {
    id
    email
    hasSentEmail
  }
}
```

#### Remove Poll Recipients

```graphql
mutation {
  removePollRecipients(
    id: "cjnuo97s6001e0798d1pery77"
    recipients: [
      "alisha@pollposition.com"
      "kareem@pollposition.com"
      "chad@pollposition.com"
      "shonnet@pollposition.com"
    ]
  ) {
    id
    email
    hasSentEmail
  }
}
```

### Poll Option Mutations

#### Create Poll Options

```graphql
mutation {
  createPollOptions(
    pollId: "cjnuo97s6001e0798d1pery77"
    descriptions: ["New York", "Miami", "Las Vegas", "Los Angeles"]
  ) {
    id
    description
  }
}
```

#### Update Poll Option Description

```graphql
mutation {
  updatePollOptionDescription(
    id: "cjnuo97s6001e0798d1pery77"
    description: "New York"
  ) {
    id
    description
  }
}
```

#### Delete Poll Option

```graphql
mutation {
  deletePollOption(id: "cjnuo97s6001e0798d1pery77") {
    id
    description
  }
}
```

### Poll Vote Mutations

#### Create Poll Vote

```graphql
mutation {
  createPollVote(optionId: "cjnuo97s6001e0798d1pery77") {
    id
  }
}
```

#### Update Poll Vote

```graphql
mutation {
  updatePollVote(id: "cjnuo97s6001e0798d1pery77") {
    id
  }
}
```
