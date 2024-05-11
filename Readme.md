# Readme

## Running

- TKinter is required in order to run, and if you're trying to run via WSL or Docker (you must be mad), you'll need to follow a few extra steps

### Resources for running in WSL because why not.

- https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps
- https://stackoverflow.com/questions/62890536/how-do-you-fix-tkinter-in-python3-8-on-wsl

In short:
- install driver for vGPU (may not be necessary, try installing gnome-text-editor first)
- Running menu with Tkinter is WSL may be causing issues, due to certain fonts not being available.
- if you run `apt install python3-tk` or similar, then it should work
