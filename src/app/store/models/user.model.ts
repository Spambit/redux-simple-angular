export class User {
  public static readonly UNKNOWN_NAME = "Unknown";
  public static readonly UNKNOWN_PROFILE_PIC_URL =
    "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/bootstrap4/assets/img/user.jpg";
  private _name = User.UNKNOWN_NAME;
  private _profilePic = User.UNKNOWN_PROFILE_PIC_URL;
  public get name() {
    return this._name;
  }

  public get profilePic() {
    return this._profilePic;
  }

  public static create(
    name: string = User.UNKNOWN_NAME,
    profilePic: string = User.UNKNOWN_PROFILE_PIC_URL
  ): User {
    const user = new User();
    user._name = name;
    user._profilePic = profilePic;
    return user;
  }

  isUnknownUser() {
    return name === User.UNKNOWN_NAME;
  }
}
