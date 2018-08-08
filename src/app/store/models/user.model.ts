export class User {
  name = "Unknown";
  profilePic = "";

  public static createDummyUser(name = "Sambit"): User {
    const user = new User();
    user.name = name;
    return user;
  }

  isUnknownUser() {
    return name === "Unknown";
  }
}
