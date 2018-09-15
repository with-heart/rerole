# rerole

> rerole is a menu wrapper for `assume-role`

![Screencap of rerole in action](screencap.gif)

## Installation

1. [Install assume-role][assume-role]
2. Globally install `@with-heart/rerole`:

```bash
$ npm i -g @with-heart/rerole
```

3. Use the `source` command found in the postinstall message or by running `npm run showBashMessage` (**note: rerole will not work if this step is not completed**)

## Usage

Use the `rerole` command to select your desired profile from a menu created from the profiles (and default, if it exists) found in your `~/.aws/config` file. This profile is then used to run the command `eval $(assume-role $selected_role)`, which is needed to add the `assume-role` environment variables to the current shell.

See the [`assume-role` readme][assume-role] for more information.

## Explanation

_Coming soon_

[assume-role]: https://github.com/remind101/assume-role
