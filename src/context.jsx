import React,{useContext, useState} from "react";
import chrome from './images/chrome.jpeg'
import apple from './images/apple.png'
import execl from './images/execl.png'
import photoshop from './images/photoshop.png'
import powerpoint from './images/powerpoint.jpeg'
import vscode from './images/vs-code.jpeg'
import vs from './images/vs.png'
import window from './images/windows.png'
import word from './images/word.jpeg'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const [buttondata, setButtondata] = useState([])
  const [data, setData] = useState([])
  const [main, setMain] = useState(true)

  /* MainButtons Functions */
  const setApple = () => {
    setData(Apple1)
    setButtondata(AppleButton)
  }

  const setWindows = () => {
    setData(Apple1)
    setButtondata(WindowsButton)
  }

  const setExcel = () => {
    setData(Excel1)
    setButtondata(ExcelButton)
  }

  const setPhotoshop = () => {
    setData(Photoshop1)
    setButtondata(PhotoshopButton)
  }

  const setChrome = () => {
    setData(Chrome1)
    setButtondata(ChromeButton)
  }

  const setWord = () => {
    setData(Word1)
    setButtondata(WordButton)
  }

  const setPowerpoint = () => {
    setData(Powerpoint1)
    setButtondata(PowerpointButton)
  }

  const setVs = () => {
    setData(Vs1)
    setButtondata(VsButton)
  }

  const setVscode = () => {
    setData(Vscode1)
    setButtondata(VscodeButton)
  }

  /* AppleData */

  const setAppleData1 = () => {
    setData(Apple1)
  }
  const setAppleData2 = () => {
    setData(Apple2)
  }
  const setAppleData3 = () => {
    setData(Apple3)
  }
  const setAppleData4 = () => {
    setData(Apple4)
  }
  const Apple1 = [
    {
      id : 1,
      command : "Command-X",
      info : "Cut: Remove the selected item and copy it."
    },
    {
      id : 2,
      command : "Command-C",
      info : "Copy the selected item to the Clipboard."
    },
    {
      id : 3,
      command : "Command-V",
      info : "Paste the contents into the current  app."
    },
    {
      id : 4,
      command : "Command-Z",
      info : "Undo the previous command."
    },
    {
      id : 5,
      command : "Command-A",
      info : "Select All items."
    },
    {
      id : 6,
      command : "Command-F",
      info : "Find: Open a Find window."
    },
    {
      id : 7,
      command : "Command-G",
      info : "Find Again: Find the item previously found."
    },
    {
      id : 8,
      command : "Command-H",
      info : "Hide the windows of the front app."
    },
    {
      id : 9,
      command : "Command-M",
      info : "Minimize the front window to the Dock."
    },
    {
      id : 10,
      command : "Command-N",
      info : "New: Open an new document or window."
    },
    {
      id : 11,
      command : "Command-O",
      info : "Open the selected item."
    },
    {
      id : 12,
      command : "Command-P",
      info : "Print the current document."
    },
    {
      id : 13,
      command : "Command-S",
      info : "Save the current document."
    },
    {
      id : 14,
      command : "Command-W",
      info : "Close the front window."
    },
    {
      id : 15,
      command : "Command-Q",
      info : "Quit the app."
    },
    {
      id : 16,
      command : "Option-Command-Ese",
      info : "Force Quit: Choose an app to force quit,from your previously opened apps."
    },
    {
      id : 17,
      command : "Command-Spacebar",
      info : "Spotlight: Show or hide the Spotlight search field. "
    },
    {
      id : 18,
      command : "Spacebar",
      info : "Quick Look: Use Quick Look to preview the selected item."
    },
    {
      id : 19,
      command : "Command-Tab",
      info : "Switch apps: Switch to the next most recently used app among your open apps."
    },
    {
      id : 20,
      command : "Shift-Command-Tilde",
      info : "Switch windows: Switch to the next most recently used window pf the front app."
    },
    {
      id : 21,
      command : "Shift-Command-3",
      info : "Screenshot: Take a screenshot of the entire screen."
    },
    {
      id : 22,
      command : "Command-Comma",
      info : "Preferences: Open preference for the front app."
    }
  ]
  const Apple2 = [
    {
      id : 1,
      command : "Power button",
      info : "Tap to turn on your Mac."
    },
    {
      id : 2,
      command : "Control-Command-Power",
      info : "Force your Mac to restart."
    },
    {
      id : 3,
      command : "Control-Shift-Power",
      info : "Put your displays to sleep."
    },
    {
      id : 4,
      command : "Control-Command-Media Eject",
      info : "Quit all apps, then restart your Mac."
    },
    {
      id : 5,
      command : "Control-Option-Command-Power",
      info : "Quit all apps, then shut down your Mac."
    },
    {
      id : 6,
      command : "Shift-Command-Q",
      info : "Log out of your macOS user account."
    },
    {
      id : 7,
      command : "Option-Shift-Command-Q",
      info : "Log out of your macOS user account immediately, without being asked to confirm.."
    }
  ]
  const Apple3 = [
    {
      id : 1,
      command : "Command-B",
      info : "Boldface the selected text, or turn boldfacing on or off."
    },
    {
      id : 2,
      command : "Command-I",
      info : "Italicize the selected text, or turn italics on or off."
    },
    {
      id : 3,
      command : "Command-U",
      info : "Underline the selected text, or turn underlining on or off."
    },
    {
      id : 4,
      command : "Option-Delete",
      info : "Delete the word to the left of the insertion point."
    },
    {
      id : 5,
      command : "Command-D",
      info : "Select the Desktop folder from within an Open dialog or Save dialog."
    },
    {
      id : 6,
      command : "Control-Command-D",
      info : "Show or hide the definition of the selected word."
    },
    {
      id : 7,
      command : "Shift-Command-Colon (:)",
      info : "Display the Spelling and Grammar window."
    },
    {
      id : 8,
      command : "Command-Semicolon (;)",
      info : "Find misspelled words in the document."
    },
    {
      id : 9,
      command : "Command-T",
      info : "Show or hide the Fonts window."
    },
    {
      id : 10,
      command : "Control-H",
      info : "Delete the character to the left of the insertion point. Or use Delete."
    },
    {
      id : 11,
      command : "Control-D",
      info : "Delete the character to the right of the insertion point. Or use Fn-Delete."
    },
    {
      id : 12,
      command : "Fn-Delete",
      info : "Forward delete on keyboards that don’t have a Forward Delete  key. Or use Control-D."
    },
    {
      id : 13,
      command : "Control-K",
      info : "Delete the text between the insertion point and the end of the line or paragraph."
    },
    {
      id : 14,
      command : "Command-Delete",
      info : "Select Delete or Don’t Save in a dialog that contains a Delete or Don’t Save button."
    },
    {
      id : 15,
      command : "Fn–Up Arrow",
      info : "Page Up: Scroll up one page."
    },
    {
      id : 16,
      command : "Fn–Down Arrow",
      info : "Page Down: Scroll down one page."
    },
    {
      id : 17,
      command : "Fn–Left Arrow",
      info : "Home: Scroll to the beginning of a document."
    },
    {
      id : 18,
      command : "Fn–Right Arrow",
      info : "End: Scroll to the end of a document."
    },
    {
      id : 19,
      command : "Command–Up Arrow",
      info : "Move the insertion point to the beginning of the document."
    },
    {
      id : 20,
      command : "Command–Down Arrow",
      info : "Move the insertion point to the end of the document."
    },
    {
      id : 21,
      command : "Command–Left Arrow",
      info : "Move the insertion point to the beginning of the current line."
    },
    {
      id : 22,
      command : "Command–Right Arrow",
      info : "Move the insertion point to the end of the current line."
    },
    {
      id : 23,
      command : "Option–Left Arrow",
      info : "Move the insertion point to the beginning of the previous word."
    },
    {
      id : 24,
      command : "Shift–Command–Up Arrow",
      info : "Select the text between the insertion point and the beginning of the document."
    },
    {
      id : 25,
      command : "Shift–Command–Down Arrow",
      info : "Select the text between the insertion point and the end of the document."
    },
    {
      id : 26,
      command : "Shift–Command–Left Arrow",
      info : "Select the text between the insertion point and the beginning of the current line."
    },
    {
      id : 27,
      command : "Shift–Command–Right Arrow",
      info : "Select the text between the insertion point and the end of the current line."
    },
    {
      id : 28,
      command : "Shift–Up Arrow",
      info : "Extend text selection to the nearest character at the same horizontal location on the line above."
    },
    {
      id : 29,
      command : "Shift–Down Arrow",
      info : "Extend text selection to the nearest character at the same horizontal location on the line below."
    },
    {
      id : 30,
      command : "Shift–Left Arrow",
      info : "Extend text selection one character to the left."
    },
    {
      id : 31,
      command : "Shift–Right Arrow",
      info : "Extend text selection one character to the right."
    }
  ]
  const Apple4 = [
    {
      id : 1,
      command : "Command-D",
      info : "Duplicate the selected files."
    },
    {
      id : 2,
      command : "Command-E",
      info : "Eject the selected disk or volume."
    },
    {
      id : 3,
      command : "Command-F",
      info : "Start a Spotlight search in the Finder window."
    },
    {
      id : 4,
      command : "Command-I",
      info : "Show the Get Info window for a selected file."
    },
    {
      id : 5,
      command : "Shift-Command-C",
      info : "Open the Computer window."
    },
    {
      id : 6,
      command : "Shift-Command-D",
      info : "Open the desktop folder."
    },
    {
      id : 7,
      command : "Shift-Command-F",
      info : "Open the All My Files window."
    },
    {
      id : 8,
      command : "Shift-Command-G",
      info : "Open a Go to Folder window."
    },
    {
      id : 9,
      command : "Shift-Command-H",
      info : "Open the Home folder."
    },
    {
      id : 10,
      command : "Shift-Command-I",
      info : "Open iCloud Drive."
    },
    {
      id : 11,
      command : "Shift-Command-K",
      info : "Open the Network window."
    },
    {
      id : 12,
      command : "Option-Command-L",
      info : "Open the Downloads folder."
    },
    {
      id : 13,
      command : "Shift-Command-O",
      info : "Open the Documents folder."
    },
    {
      id : 14,
      command : "Shift-Command-R",
      info : "Open the AirDrop window."
    },
    {
      id : 15,
      command : "Shift-Command-T",
      info : "Add selected Finder item to the Dock"
    },
    {
      id : 16,
      command : "Control-Shift-Command-T",
      info : "Add selected Finder item to the Dock"
    },
    {
      id : 17,
      command : "Shift-Command-U",
      info : "Open the Utilities folder."
    },
    {
      id : 18,
      command : "Option-Command-D",
      info : "Show or hide the Dock."
    },
    {
      id : 19,
      command : "Control-Command-T",
      info : "Add the selected item to the sidebar."
    },
    {
      id : 20,
      command : "Option-Command-P",
      info : "Hide or show the path bar in Finder windows."
    },
    {
      id : 21,
      command : "Option-Command-S",
      info : "Hide or show the Sidebar in Finder windows."
    },
    {
      id : 22,
      command : "Command–Slash (/)",
      info : "Hide or show the status bar."
    },
    {
      id : 23,
      command : "Command-J",
      info : "Show View Options."
    },
    {
      id : 24,
      command : "Command-K",
      info : "Open the Connect to Server window."
    },
    {
      id : 25,
      command : "Command-L",
      info : "Make an alias of the selected item."
    },
    {
      id : 26,
      command : "Command-N",
      info : "Open a new Finder window."
    },
    {
      id : 27,
      command : "Shift-Command-N",
      info : "Create a new folder."
    },
    {
      id : 28,
      command : "Command-R",
      info : "Show the original file for the selected alias."
    },
    {
      id : 29,
      command : "Command-T",
      info : "Show or hide the tab bar."
    },
    {
      id : 30,
      command : "Shift-Command-T",
      info : "Show or hide a Finder tab."
    },
    {
      id : 31,
      command : "Option-Command-T",
      info : "Show or hide the toolbar when a single tab is open in the current Finder window."
    },
    {
      id : 32,
      command : "Option-Command-V",
      info : "Move: Move the files in the Clipboard from their original location to the current location."
    },
    {
      id : 33,
      command : "Option-Command-Y",
      info : "View a Quick Look slideshow of the selected files."
    }
  ]
  const AppleButton = [
    {
      id: 1,
      title: "Common Keys",
      className: "button active",
      function: setAppleData1
    },
    {
      id: 2,
      title: "Power Keys",
      className: "button",
      function: setAppleData2
    },
    {
      id: 3,
      title: "Document Keys",
      className: "button",
      function: setAppleData3
    },
    {
      id: 4,
      title: "Finder Keys",
      className: "button",
      function: setAppleData4
    },
  ]

  /* WindowsData */

  const setWindowsData1 = () => {
    setData(Windows1)
  }
  const setWindowsData2 = () => {
    setData(Windows2)
  }
  const setWindowsData3 = () => {
    setData(Windows3)
  }
  const setWindowsData4 = () => {
    setData(Windows4)
  }
  const setWindowsData5 = () => {
    setData(Windows5)
  }
  const setWindowsData6 = () => {
    setData(Windows6)
  }
  const setWindowsData7 = () => {
    setData(Windows7)
  }
  const Windows1 = [
    {
      id : 1,
      command : "Cut the selected item",
      info : "Ctrl + X" 
    },
    {
      id : 2,
      command : "Copy the selected item",
      info : "Ctrl + C (or Ctrl + Insert)" 
    },
    {
      id : 3,
      command : "Paste the selected item",
      info : "Ctrl + V (or Shift + Insert)" 
    },
    {
      id : 4,
      command : "Undo an action",
      info : "Ctrl + Z" 
    },
    {
      id : 5,
      command : "Switch between open apps",
      info : "Alt + Tab" 
    },
    {
      id : 6,
      command : "Close the active item, or exit the active app",
      info : "Alt + F4 " 
    },
    {
      id : 7,
      command : "Lock your PC",
      info : "Windows logo key + L" 
    },
    {
      id : 8,
      command : "Display and hide the desktop",
      info : "Windows logo key + D" 
    },
    {
      id : 9,
      command : "Rename the selected item",
      info : "F2" 
    },
    {
      id : 10,
      command : "Search for a file or folder in File Explorer",
      info : "F3" 
    },
    {
      id : 11,
      command : "Display the address bar list in File Explorer",
      info : "F4" 
    },
    {
      id : 12,
      command : "Refresh the active window",
      info : "F5" 
    },
    {
      id : 13,
      command : "Cycle through screen elements in a window or on the desktop",
      info : "F6" 
    },
    {
      id : 14,
      command : "Activate the Menu bar in the active app",
      info : "F10" 
    },
    {
      id : 15,
      command : "Show your password on the sign-in screen",
      info : "Alt + F8" 
    },
    {
      id : 16,
      command : "Cycle through items in the order in which they were opened",
      info : "Alt + Esc" 
    },
    {
      id : 17,
      command : "Perform the command for that letter",
      info : "Alt + underlined letter" 
    },
    {
      id : 18,
      command : "Display properties for the selected item",
      info : "Alt + Enter" 
    },
    {
      id : 19,
      command : "Open the shortcut menu for the active window",
      info : "Alt + Spacebar" 
    },
    {
      id : 20,
      command : "Go back",
      info : "Alt + Left arrow" 
    },
    {
      id : 21,
      command : "Go forward",
      info : "Alt + Right arrow" 
    },
    {
      id : 22,
      command : "Move up one screen",
      info : "Alt + Page Up" 
    },
    {
      id : 23,
      command : "Move down one screen",
      info : "Alt + Page Down" 
    },
    {
      id : 24,
      command : "Close the active document",
      info : "Ctrl + F4 " 
    },
    {
      id : 25,
      command : "Select all items in a document or window",
      info : "Ctrl + A" 
    },
    {
      id : 26,
      command : "Delete the selected item and move it to the Recycle Bin",
      info : "Ctrl + D (or Delete) " 
    },
    {
      id : 27,
      command : "Refresh the active window",
      info : "Ctrl + R (or F5) " 
    },
    {
      id : 28,
      command : "Redo an action",
      info : "Ctrl + Y " 
    },
    {
      id : 29,
      command : "Move the cursor to the beginning of the next word",
      info : "Ctrl + Right arrow" 
    },
    {
      id : 30,
      command : "Move the cursor to the beginning of the previous word",
      info : "Ctrl + Left arrow " 
    },
    {
      id : 31,
      command : "Move the cursor to the beginning of the next paragraph",
      info : "Ctrl + Down arrow" 
    },
    {
      id : 32,
      command : "Move the cursor to the beginning of the previous paragraph",
      info : "Ctrl + Up arrow" 
    },
    {
      id : 33,
      command : "Use the arrow keys to switch between all open apps",
      info : "Ctrl + Alt + Tab" 
    },
    {
      id : 34,
      command : "When a group or tile is in focus on the Start menu, move it in the direction specified",
      info : "Ctrl + Alt + Shift + arrow keys" 
    },
    {
      id : 35,
      command : "Select multiple individual items in a window or on the desktop",
      info : "Ctrl + arrow key (to move to an item) + Spacebar" 
    },
    {
      id : 36,
      command : "Select a block of text",
      info : "Ctrl + Shift with an arrow key" 
    },
    {
      id : 37,
      command : "Open Start",
      info : "Ctrl + Esc" 
    },
    {
      id : 38,
      command : "Open Task Manager",
      info : "Ctrl + Shift + Esc" 
    },
    {
      id : 39,
      command : "Switch the keyboard layout when multiple keyboard layouts are available",
      info : "Ctrl + Shift " 
    },
    {
      id : 40,
      command : "Display the shortcut menu for the selected item",
      info : "Shift + F10 " 
    },
    {
      id : 41,
      command : "Select more than one item in a window or on the desktop, or select text in a document",
      info : "Shift with any arrow key" 
    },
    {
      id : 42,
      command : "Delete the selected item without moving it to the Recycle Bin first",
      info : "Shift + Delete" 
    },
    {
      id : 43,
      command : "Stop or leave the current task",
      info : "Esc" 
    }
  ]
  const Windows2 = [
    {
      id : 1,
      command : "Open or close Start",
      info : "Windows logo key" 
    },
    {
      id : 2,
      command : "Open Action center",
      info : "Windows logo key + A" 
    },
    {
      id : 3,
      command : "Set focus in the notification area",
      info : "Windows logo key + B" 
    },
    {
      id : 4,
      command : "Open Cortana in listening mode",
      info : "Windows logo key + C" 
    },
    {
      id : 5,
      command : "Open the charms menu",
      info : "Windows logo key + Shift + C" 
    },
    {
      id : 6,
      command : "Display and hide the deskto",
      info : "Windows logo key + D" 
    },
    {
      id : 7,
      command : "Display and hide the date and time on the desktop",
      info : "Windows logo key + Alt + D" 
    },
    {
      id : 8,
      command : "Open File Explorer",
      info : "Windows logo key + E " 
    },
    {
      id : 9,
      command : "Open Feedback Hub",
      info : "Windows logo key + F " 
    },
    {
      id : 10,
      command : "Open Feedback Hub",
      info : "Windows logo key + G" 
    },
    {
      id : 11,
      command : "Open Settings",
      info : "Windows logo key + I " 
    },
    {
      id : 12,
      command : "Set focus to a Windows tip when one is available.",
      info : "Windows logo key + J" 
    },
    {
      id : 13,
      command : "Open the Connect quick action",
      info : "Windows logo key + K" 
    },
    {
      id : 14,
      command : "Lock your PC or switch accounts",
      info : "Windows logo key + L " 
    },
    {
      id : 15,
      command : "Minimize all windows",
      info : "Windows logo key + M" 
    },
    {
      id : 16,
      command : "Lock device orientation",
      info : "Windows logo key + O" 
    },
    {
      id : 17,
      command : "Choose a presentation display mode",
      info : "Windows logo key + P " 
    },
    {
      id : 18,
      command : "Open the Run dialog box",
      info : "Windows logo key + R" 
    },
    {
      id : 19,
      command : "Open search",
      info : "Windows logo key + S " 
    },
    {
      id : 20,
      command : "Cycle through apps on the taskbar",
      info : "Windows logo key + T " 
    },
    {
      id : 21,
      command : "Open Ease of Access Center",
      info : "Windows logo key + U " 
    },
    {
      id : 22,
      command : "Cycle through notifications",
      info : "Windows logo key + V" 
    },
    {
      id : 23,
      command : "Cycle through notifications in reverse order",
      info : "Windows logo key + Shift + V" 
    },
    {
      id : 24,
      command : "Open the Quick Link menu",
      info : "Windows logo key + X " 
    },
    {
      id : 25,
      command : "Show the commands available in an app in full-screen mode",
      info : "Windows logo key + Z " 
    },
    {
      id : 26,
      command : "Temporarily peek at the desktop",
      info : "Windows logo key + comma (,)" 
    },
    {
      id : 27,
      command : "Display the System Properties dialog box",
      info : "Windows logo key + Pause" 
    },
    {
      id : 28,
      command : "Search for PCs (if you're on a network) ",
      info : "Windows logo key + Ctrl + F" 
    },
    {
      id : 29,
      command : "Restore minimized windows on the desktop",
      info : "Windows logo key + Shift + M" 
    },
    {
      id : 30,
      command : "Open the desktop and start the app pinned to the taskbar in the position indicated by the number. If the app is already running, switch to that app.",
      info : "Windows logo key + number" 
    },
    {
      id : 31,
      command : "Open the desktop and start a new instance of the app pinned to the taskbar in the position indicated by the number",
      info : "Windows logo key + Shift + number" 
    },
    {
      id : 32,
      command : "Open the desktop and switch to the last active window of the app pinned to the taskbar in the position indicated by the number",
      info : "Windows logo key + Ctrl + number" 
    },
    {
      id : 33,
      command : "Open the desktop and open the Jump List for the app pinned to the taskbar in the position indicated by the number",
      info : "Windows logo key + Alt + number" 
    },
    {
      id : 34,
      command : "Open the desktop and open a new instance of the app located at the given position on the taskbar as an administrator",
      info : "Windows logo key + Ctrl + Shift + number" 
    },
    {
      id : 35,
      command : "Open Task view",
      info : "Windows logo key + Tab" 
    },
    {
      id : 36,
      command : "Maximize the window",
      info : "Windows logo key + Up arrow" 
    }, 
    {
      id : 37,
      command : "Remove current app from screen or minimize the desktop window",
      info : "Windows logo key + Down arrow" 
    },
    {
      id : 38,
      command : "Maximize the app or desktop window to the left side of the screen",
      info : "Windows logo key + Left arrow" 
    },
    {
      id : 39,
      command : "Maximize the app or desktop window to the right side of the screen",
      info : "Windows logo key + Right arrow" 
    },
    {
      id : 40,
      command : "Minimize all except the active desktop window",
      info : "Windows logo key + Home" 
    },
    {
      id : 41,
      command : "Stretch the desktop window to the top and bottom of the screen",
      info : "Windows logo key + Shift + Up arrow" 
    },
    {
      id : 42,
      command : "Restore/minimize active desktop windows vertically, maintaining width",
      info : "Windows logo key + Shift + Down arrow" 
    },
    {
      id : 43,
      command : "Move an app or window in the desktop from one monitor to another",
      info : "Windows logo key + Shift + Left arrow or Right arrow" 
    },
    {
      id : 44,
      command : "Switch input language and keyboard layout",
      info : "Windows logo key + Spacebar" 
    },
    {
      id : 45,
      command : "Change to a previously selected input",
      info : "Windows logo key + Ctrl + Spacebar" 
    },
    {
      id : 46,
      command : "Open Narrator",
      info : "Windows logo key + Ctrl + Enter" 
    },
    {
      id : 47,
      command : "Begin IME reconversion",
      info : "Windows logo key + forward slash (/)" 
    },
    {
      id : 48,
      command : "Zoom in or out using Magnifier",
      info : "Windows logo key + plus (+) or minus (-)" 
    },
    {
      id : 49,
      command : "Exit Magnifier",
      info : "Windows logo key + Esc" 
    }
  ]
  const Windows3 = [
    {
      id : 1,
      command : "Copy the selected text ",
      info : "Ctrl + C (or Ctrl + Insert) " 
    },
    {
      id : 2,
      command : "Paste the selected text",
      info : "Ctrl + V (or Shift + Insert)" 
    },
    {
      id : 3,
      command : "Enter Mark mode",
      info : "Ctrl + M " 
    },
    {
      id : 4,
      command : "Begin selection in block mode",
      info : "Alt + selection key" 
    },
    {
      id : 5,
      command : "Move the cursor in the direction specified ",
      info : "Arrow keys" 
    },
    {
      id : 6,
      command : "Move the cursor by one page up",
      info : "Page up " 
    },
    {
      id : 7,
      command : "Move the cursor by one page down",
      info : "Page down " 
    },
    {
      id : 8,
      command : "Move the cursor to the beginning of the buffer",
      info : "Ctrl + Home (Mark mode) " 
    },
    {
      id : 9,
      command : "Move the cursor to the end of the buffer",
      info : "Ctrl + End (Mark mode) " 
    },
    {
      id : 10,
      command : "Move up one line in the output history",
      info : "Ctrl + Up arrow" 
    },
    {
      id : 11,
      command : "Move down one line in the output history",
      info : "Ctrl + Down arrow" 
    },
    {
      id : 12,
      command : "If the command line is empty, move the viewport to the top of the buffer.",
      info : "Ctrl + Home (History navigation)" 
    },
    {
      id : 13,
      command : "If the command line is empty, move the viewport to the command line.",
      info : "Ctrl + End (History navigation) " 
    }
  ]
  const Windows4 = [
    {
      id : 1,
      command : "Display the items in the active list",
      info : "F4" 
    },
    {
      id : 2,
      command : "Move forward through tabs",
      info : "Ctrl + Tab " 
    },
    {
      id : 3,
      command : "Move back through tabs",
      info : "Ctrl + Shift + Tab" 
    },
    {
      id : 4,
      command : "Ctrl + number (number 1–9)",
      info : "Move to nth tab " 
    },
    {
      id : 5,
      command : "Move forward through options",
      info : "Tab" 
    },
    {
      id : 6,
      command : "Move back through options",
      info : "Shift + Tab " 
    },
    {
      id : 7,
      command : "Perform the command (or select the option) that is used with that letter",
      info : "Alt + underlined letter" 
    },
    {
      id : 8,
      command : "Select or clear the check box if the active option is a check box",
      info : "Spacebar" 
    },
    {
      id : 9,
      command : "Open a folder one level up if a folder is selected in the Save As or Open dialog box",
      info : "Backspace" 
    },
    {
      id : 10,
      command : "Select a button if the active option is a group of option buttons",
      info : "Arrow keys" 
    }
  ]
  const Windows5 = [
    {
      id : 1,
      command : "Select the address bar",
      info : "Alt + D " 
    },
    {
      id : 2,
      command : "Select the search box",
      info : "Ctrl + E " 
    },
    {
      id : 3,
      command : "Select the search box",
      info : "Ctrl + F " 
    },
    {
      id : 4,
      command : "Open a new window",
      info : "Ctrl + N " 
    },
    {
      id : 5,
      command : "Close the active window",
      info : "Ctrl + W " 
    },
    {
      id : 6,
      command : "Change the size and appearance of file and folder icons",
      info : "Ctrl + mouse scrollwheel" 
    },
    {
      id : 7,
      command : "Display all folders above the selected folder",
      info : "Ctrl + Shift + E" 
    },
    {
      id : 8,
      command : "Create a new folder",
      info : "Ctrl + Shift + N " 
    },
    {
      id : 9,
      command : "Display all subfolders under the selected folder",
      info : "Num Lock + asterisk (*)" 
    },
    {
      id : 10,
      command : "Display the contents of the selected folder",
      info : "Num Lock + plus (+)" 
    },
    {
      id : 11,
      command : "Collapse the selected folder",
      info : "Num Lock + minus(-)" 
    },
    {
      id : 12,
      command : "Display the preview panel",
      info : "Alt + P " 
    },
    {
      id : 13,
      command : "Open the Properties dialog box for the selected item",
      info : "Alt + Enter" 
    },
    {
      id : 14,
      command : "View the next folder",
      info : "Alt + Right arrow" 
    },
    {
      id : 15,
      command : "View the folder that the folder was in",
      info : "Alt + Up arrow " 
    },
    {
      id : 16,
      command : "View the previous folder",
      info : "Alt + Left arrow " 
    },
    {
      id : 17,
      command : "View the previous folder",
      info : "Backspace " 
    },
    {
      id : 18,
      command : "Display the current selection (if it's collapsed), or select the first subfolder",
      info : "Right arrow " 
    },
    {
      id : 19,
      command : "Collapse the current selection (if it's expanded), or select the folder that the folder was in",
      info : "Left arrow " 
    },
    {
      id : 20,
      command : "Display the bottom of the active window",
      info : "End" 
    },
    {
      id : 21,
      command : "Display the top of the active window",
      info : "Home" 
    },
    {
      id : 22,
      command : "Maximize or minimize the active window",
      info : "F11" 
    }
  ]
  const Windows6 = [
    {
      id : 1,
      command : "Open Task view",
      info : "Windows logo key + Tab" 
    },
    {
      id : 12,
      command : "Add a virtual desktop",
      info : "Windows logo key + Ctrl + D" 
    },
    {
      id : 3,
      command : "Switch between virtual desktops you’ve created on the right",
      info : "Windows logo key + Ctrl + Right arrow" 
    },
    {
      id : 4,
      command : "Switch between virtual desktops you’ve created on the left",
      info : "Windows logo key + Ctrl + Left arrow" 
    },
    {
      id : 5,
      command : "Close the virtual desktop you're using",
      info : "Windows logo key + Ctrl + F4" 
    }
  ]
  const Windows7 = [
    {
      id : 1,
      command : "Open an app or quickly open another instance of an app",
      info : "Shift + click a taskbar button " 
    },
    {
      id : 2,
      command : "Open an app as an administrator",
      info : "Ctrl + Shift + click a taskbar button" 
    },
    {
      id : 3,
      command : "Show the window menu for the app",
      info : "Shift + right-click a taskbar button " 
    },
    {
      id : 4,
      command : "Show the window menu for the group",
      info : "Shift + right-click a grouped taskbar button " 
    },
    {
      id : 5,
      command : "Cycle through the windows of the group",
      info : "Ctrl + click a grouped taskbar button " 
    }
  ]
  const WindowsButton = [
    {
      id: 1,
      title: "General shortcuts",
      function: setWindowsData1
    },
    {
      id: 2,
      title: "Windows logo",
      function: setWindowsData2
    },
    {
      id: 3,
      title: "Command Prompt",
      function: setWindowsData3
    },
    {
      id: 4,
      title: "Dialog box",
      function: setWindowsData4
    },
    {
      id: 5,
      title: "File Explorer",
      function: setWindowsData5
    },
    {
      id: 6,
      title: "Virtual desktop",
      function: setWindowsData6
    },
    {
      id: 7,
      title: "Taskbar keyboard",
      function: setWindowsData7
    },
  ]

  /* ExeclData */
  const setExcelData1 = () => {
    setData(Excel1)
  }
  const setExcelData2 = () => {
    setData(Excel2)
  }
  const setExcelData3 = () => {
    setData(Excel3)
  }
  const setExcelData4 = () => {
    setData(Excel4)
  }
  const setExcelData5 = () => {
    setData(Excel5)
  }
  const Excel1 = [
    {
      id : 1,
      command : "Format Box",
      info : "CTRL + 1" 
    },
    {
      id : 2,
      command : "Copy Format",
      info : "ALT + E + S + T" 
    },
    {
      id : 3,
      command : "Increase Decimal",
      info : "ALT + H + 0" 
    },
    {
      id : 4,
      command : "Decrease Decimal",
      info : "ALT + H + 9" 
    },
    {
      id : 5,
      command : "Boxing",
      info : "CTRL + SHIFT + 7" 
    },
    {
      id : 6,
      command : "Fit Column Width ",
      info : "ALT + O + C + A" 
    },
    {
      id : 7,
      command : "Change Tab Name",
      info : "ALT + H + O + R" 
    },
    {
      id : 8,
      command : "(Un)Split Panes",
      info : "ALT + W + F" 
    },
    {
      id : 9,
      command : "(Un)freeze windows",
      info : "ALT + W + S" 
    },
    {
      id : 10,
      command : "Date Format",
      info : "SHIFT + CTRL + #" 
    },
    {
      id : 11,
      command : "$ Dollar Format",
      info : "SHIFT + CTRL + $" 
    },
    {
      id : 12,
      command : "% Percentage Format",
      info : "SHIFT + CTRL + %" 
    },
    {
      id : 13,
      command : "Sum Function",
      info : "ALT + =" 
    }
  ]
  const Excel2 = [
    {
      id : 1,
      command : "Select All",
      info : "CTRL + A" 
    },
    {
      id : 2,
      command : "Bold",
      info : "CTRL + B" 
    },
    {
      id : 3,
      command : "Copy",
      info : "CTRL + C" 
    },
    {
      id : 4,
      command : "Fill Down",
      info : "CTRL + D" 
    },
    {
      id : 5,
      command : "Find",
      info : "CTRL + F" 
    },
    {
      id : 6,
      command : "Italic",
      info : "CTRL + I" 
    },
    {
      id : 7,
      command : "New Workbook",
      info : "CTRL + N" 
    },
    {
      id : 8,
      command : "Open",
      info : "CTRL + O" 
    },
    {
      id : 9,
      command : "Print",
      info : "CTRL + P" 
    },
    {
      id : 10,
      command : "Fill Right",
      info : "CTRL + R" 
    },
    {
      id : 11,
      command : "Save Workbook",
      info : "CTRL + S" 
    },
    {
      id : 12,
      command : "Underline",
      info : "CTRL + U" 
    },
    {
      id : 13,
      command : "Paste",
      info : "CTRL + VT" 
    },
    {
      id : 14,
      command : "Close Window",
      info : "CTRL + W" 
    },
    {
      id : 15,
      command : "Cut",
      info : "CTRL + X" 
    },
    {
      id : 16,
      command : "Undo",
      info : "CTRL + Z" 
    }
  ]
  const Excel3 = [
    {
      id : 1,
      command : "Edit Cells",
      info : "F2" 
    },
    {
      id : 2,
      command : "Anchor Cells",
      info : "F4" 
    },
    {
      id : 3,
      command : "Spell Check",
      info : "F7" 
    },
    {
      id : 4,
      command : "Save As",
      info : "F12" 
    },
    {
      id : 5,
      command : "Insert a Comment",
      info : "SHIFT + F2" 
    },
    {
      id : 6,
      command : "Add to Selection",
      info : "SHIFT + F8" 
    },
    {
      id : 7,
      command : "Right Click",
      info : "SHIFT + F10" 
    },
    {
      id : 8,
      command : "Name a Cell",
      info : "CTRL + F3" 
    },
    {
      id : 9,
      command : "Minimize Programs",
      info : "Windows Flag + D" 
    }
  ]
  const Excel4 = [
    {
      id : 1,
      command : "Move",
      info : "Arrows" 
    },
    {
      id : 2,
      command : "Go to End of Continuous Range",
      info : "CTRL + Arrows" 
    },
    {
      id : 3,
      command : "Select A Cell Range",
      info : "SHIFT + Arrows" 
    },
    {
      id : 4,
      command : "Highlight A Continuous Range",
      info : "CTRL + SHIFT + Arrows" 
    },
    {
      id : 5,
      command : "Switch Programs",
      info : "ALT + Tab" 
    },
    {
      id : 6,
      command : "Switch Worksheets",
      info : "CTRL + Pg Up/Down" 
    },
    {
      id : 7,
      command : "Move below",
      info : "Enter" 
    },
    {
      id : 8,
      command : "Move Up",
      info : "Shift + Enter" 
    },
    {
      id : 9,
      command : "Move to Beginning of Line",
      info : "Home" 
    },
    {
      id : 10,
      command : "Cancel",
      info : "ESC" 
    },
    {
      id : 11,
      command : "Go to Cell A1",
      info : "CTRL + Home" 
    },
    {
      id : 12,
      command : " Add a Line",
      info : "Alt + Enter (when in a cell)" 
    }
  ]
  const Excel5 = [
    {
      id : 1,
      command : "Hide Row",
      info : "CTRL + 9" 
    },
    {
      id : 2,
      command : "Unhide Row",
      info : "SHIFT + CTRL + 9" 
    },
    {
      id : 3,
      command : "Hide Column",
      info : "CTRL + 0" 
    },
    {
      id : 4,
      command : "Unhide Column",
      info : "SHIFT + CTRL + 0" 
    },
    {
      id : 5,
      command : "Highlight Row",
      info : "SHIFT + Spacebar" 
    },
    {
      id : 6,
      command : "Highlight Column",
      info : "CTRL + Spacebar" 
    },
    {
      id : 7,
      command : "Insert Blank Cells",
      info : "SHIFT + CTRL + Plus sign" 
    },
    {
      id : 8,
      command : "Delete Selected Cells",
      info : "CTRL + Minus Sign" 
    },
    {
      id : 9,
      command : "Group Rows/Columns",
      info : "SHIFT + ALT + Left Arrow" 
    },
    {
      id : 10,
      command : "Ungroup Rows/Columns",
      info : "SHIFT + ALT + Right Arrow" 
    }
  ]
  const ExcelButton = [
    {
      id: 1,
      title: "Formatting",
      function: setExcelData1
    },
    {
      id: 2,
      title: "CTRL Shortcuts",
      function: setExcelData2
    },
    {
      id: 3,
      title: "Function Key",
      function: setExcelData3
    },
    {
      id: 4,
      title: "Navigation",
      function: setExcelData4
    },
    {
      id: 5,
      title: "Colums&Rows",
      function: setExcelData5
    }
  ]

  /* PhotoshopData */
  const setPhotoshopData1 = () => {
    setData(Photoshop1)
  }
  const setPhotoshopData2 = () => {
    setData(Photoshop2)
  }
  const setPhotoshopData3 = () => {
    setData(Photoshop3)
  }
  const setPhotoshopData4 = () => {
    setData(Photoshop4)
  }
  const setPhotoshopData5 = () => {
    setData(Photoshop5)
  }
  const setPhotoshopData6 = () => {
    setData(Photoshop6)
  }
  const Photoshop1 =[
    {
      id : 1,
      command : "Free Transform",
      windows : "Control + T" ,
      mac : "Command + T"
    },
    {
      id : 2,
      command : "Toggle between painting.",
      windows : "Hold down ~ (tilde accent)" ,
      mac : "Hold down ~ (tilde accent)"
    },
    {
      id : 3,
      command : "Deselect selections",
      windows : "Control + D" ,
      mac : "Command + D"
    },
    {
      id : 4,
      command : "Undo last command",
      windows : "Control + Z" ,
      mac : "Command + Z"
    },
    {
      id : 5,
      command : "Decrease Brush Size",
      windows : "[" ,
      mac : "["
    },
    {
      id : 6,
      command : "Increase Brush Size",
      windows : "]" ,
      mac : "]"
    },
    {
      id : 7,
      command : "Decrease Brush Hardness",
      windows : "{" ,
      mac : "{"
    },
    {
      id : 8,
      command : "Increase Brush Hardness",
      windows : "}" ,
      mac : "}"
    },
    {
      id : 9,
      command : "Rotate the brush tip by 1 degree",
      windows : "Left Arrow/Right Arrow." ,
      mac : "Left Arrow/Right Arrow."
    },
    {
      id : 10,
      command : "Rotate the brush tip by 15 degrees",
      windows : "Shift + Left Arrow/Right Arrow." ,
      mac : "Shift + Left Arrow/Right Arrow."
    },
    {
      id : 11,
      command : "Default Foreground/Background colors",
      windows : "D" ,
      mac : "D"
    },
    {
      id : 12,
      command : "Switch Foreground/Background colors",
      windows : "X" ,
      mac : "X"
    },
    {
      id : 13,
      command : "Fit layer(s) to screen",
      windows : "Alt-click layer" ,
      mac : "Option-click layer"
    },
    {
      id : 14,
      command : "New layer via copy",
      windows : "Control + J" ,
      mac : "Command + J"
    },
    {
      id : 15,
      command : "New layer via cut",
      windows : "Shift + Control + J" ,
      mac : "Shift + Command + J"
    },
    {
      id : 16,
      command : "Add to a selection",
      windows : "Any selection tool + Shift-drag" ,
      mac : "Any selection tool + Shift-drag"
    },
    {
      id : 17,
      command : "Delete brush or swatch",
      windows : "Alt-click brush or swatch" ,
      mac : "Option-click brush or swatch"
    },
    {
      id : 18,
      command : "Toggle auto-select checkbox",
      windows : "Control-click" ,
      mac : "Command-click"
    },
    {
      id : 19,
      command : "Close all open documents",
      windows : "Ctrl + Alt + P" ,
      mac : "Command + Option + P"
    },
    {
      id : 20,
      command : "Cancel any modal dialog window",
      windows : "Escape" ,
      mac : "Escape"
    },
    {
      id : 21,
      command : "Selects the first edit field of the toolbar",
      windows : "Enter" ,
      mac : "Return"
    },
    {
      id : 22,
      command : "Navigate between fields",
      windows : "Tab" ,
      mac : "Tab"
    },
    {
      id : 23,
      command : "Change Cancel to Reset",
      windows : "Alt" ,
      mac : "Option"
    }
  ]
  const Photoshop2 = [
    {
      id : 1,
      command : "Start Help",
      windows : "F1" ,
      mac : "Help key"
    },
    {
      id : 2,
      command : "Undo/Redo",
      windows : "------" ,
      mac : "F1"
    },
    {
      id : 3,
      command : "Cut",
      windows : "F2" ,
      mac : "F2"
    },
    {
      id : 4,
      command : "Copy",
      windows : "F3" ,
      mac : "F3"
    },
    {
      id : 5,
      command : "Paste",
      windows : "F4" ,
      mac : "F4"
    },
    {
      id : 6,
      command : "Show/Hide Brush panel",
      windows : "F5" ,
      mac : "F5"
    },
    {
      id : 7,
      command : "Show/Hide Color panel",
      windows : "F6" ,
      mac : "F6"
    },
    {
      id : 8,
      command : "Show/Hide Layers panel",
      windows : "F7" ,
      mac : "F7"
    },
    {
      id : 9,
      command : "Show/Hide Info panel",
      windows : "F8" ,
      mac : "F8"
    },
    {
      id : 10,
      command : "Show/Hide Actions panel",
      windows : "F9" ,
      mac : "Option + F9"
    },
    {
      id : 11,
      command : "Revert",
      windows : "F12" ,
      mac : "F12"
    },
    {
      id : 12,
      command : "Fill",
      windows : "Shift + F5" ,
      mac : "Shift + F5"
    },
    {
      id : 13,
      command : "Feather Selection",
      windows : "Shift + F6" ,
      mac : "Shift + F6"
    },
    {
      id : 14,
      command : "Inverse Selection",
      windows : "Shift + F7" ,
      mac : "Shift + F7"
    }
  ]
  const Photoshop3 = [
    {
      id : 1,
      command : "Cycle through tools with the same key",
      windows : "Shift-press shortcut key" ,
      mac : "Shift-press shortcut key"
    },
    {
      id : 2,
      command : "Cycle through hidden tools",
      windows : "Alt-click + tool" ,
      mac : "Option-click + tool"
    },
    {
      id : 3,
      command : "Move tool Artboard tool",
      windows : "V" ,
      mac : "V"
    },
    {
      id : 4,
      command : "Rectangular Marquee tool Elliptical Marquee tool",
      windows : "M" ,
      mac : "M"
    },
    {
      id : 5,
      command : "Lasso tool / Polygonal Lasso tool / Magnetic Lasso tool",
      windows : "L" ,
      mac : "L"
    },
    {
      id : 6,
      command : "Object Selection tool / Quick Selection tool / Magic Wand tool",
      windows : "W" ,
      mac : "W"
    },
    {
      id : 7,
      command : "Crop tool / Perspective Crop tool / Slice tool / Slice Select tool",
      windows : "C" ,
      mac : "C"
    },
    {
      id : 8,
      command : "Eyedropper tool / Color Sampler tool / Ruler tool / Note tool",
      windows : "I" ,
      mac : "I"
    },
    {
      id : 9,
      command : "Frame tool",
      windows : "K" ,
      mac : "K"
    },
    {
      id : 10,
      command : "Eyedropper tool / 3D Material Eyedropper tool / Color Sampler tool / Ruler tooll",
      windows : "I" ,
      mac : "I"
    },
    {
      id : 11,
      command : "Spot Healing Brush tool / Healing Brush tool / Patch tool / Red Eye tool",
      windows : "J" ,
      mac : "J"
    },
    {
      id : 12,
      command : "Brush tool / Pencil tool / Color Replacement tool / Mixer Brush tool",
      windows : "B" ,
      mac : "B"
    },
    {
      id : 14,
      command : "Clone Stamp tool / Pattern Stamp tool",
      windows : "S" ,
      mac : "S"
    },
    {
      id : 15,
      command : "History Brush tool / Art History Brush tool",
      windows : "Y" ,
      mac : "Y"
    },
    {
      id : 16,
      command : "Eraser tool / Background Eraser tool",
      windows : "E" ,
      mac : "E"
    },
    {
      id : 17,
      command : "Gradient tool / Paint Bucket tool",
      windows : "G" ,
      mac : "G"
    },
    {
      id : 18,
      command : "Dodge tool / Burn tool / Sponge tool",
      windows : "O" ,
      mac : "O"
    },
    {
      id : 19,
      command : "Pen tool / Freeform Pen tool",
      windows : "P" ,
      mac : "P"
    },
    {
      id : 20,
      command : "Horizontal Type tool / Vertical Type tool",
      windows : "T" ,
      mac : "T"
    },
    {
      id : 21,
      command : "Path Selection tool / Direct Selection tool",
      windows : "A" ,
      mac : "A"
    },
    {
      id : 22,
      command : "Rectangle tool / Ellipse tool / Polygon tool",
      windows : "U" ,
      mac : "U"
    },
    {
      id : 23,
      command : "Hand tool",
      windows : "H" ,
      mac : "H"
    },
    {
      id : 24,
      command : "Rotate View tool",
      windows : "R" ,
      mac : "R"
    },
    {
      id : 25,
      command : "Zoom tool / Liquify",
      windows : "Z" ,
      mac : "Z"
    },
    {
      id : 26,
      command : "Default Foreground/Background colors",
      windows : "D" ,
      mac : "D"
    },
    {
      id : 27,
      command : "Switch Foreground/Background colors",
      windows : "X" ,
      mac : "X"
    },
    {
      id : 28,
      command : "Toggle Standard/Quick Mask modes",
      windows : "Q" ,
      mac : "Q"
    },
    {
      id : 29,
      command : "Artboard tool",
      windows : "V" ,
      mac : "V"
    },
    {
      id : 30,
      command : "Toggle Preserve Transparency",
      windows : "/ (forward slash)" ,
      mac : "/ (forward slash)"
    },
    {
      id : 31,
      command : "Decrease Brush Hardness",
      windows : "{" ,
      mac : "{"
    },
    {
      id : 32,
      command : "Increase Brush Hardness",
      windows : "}" ,
      mac : "}"
    },
    {
      id : 33,
      command : "Previous Brush",
      windows : "," ,
      mac : ","
    },
    {
      id : 34,
      command : "Next Brush",
      windows : "." ,
      mac : "."
    },
    {
      id : 35,
      command : "First Brush",
      windows : "<" ,
      mac : "<"
    },
    {
      id : 36,
      command : "Last Brush",
      windows : ">" ,
      mac : ">"
    }
  ]
  const Photoshop4 = [
    {
      id : 1,
      command : "Cycle through open documents",
      windows : "Control + Tab" ,
      mac : "Control + Tab"
    },
    {
      id : 2,
      command : "Switch to previous document",
      windows : "Shift + Control + Tab" ,
      mac : "Shift + Command + `(grave accent)"
    },
    {
      id : 3,
      command : "Close a file in Photoshop and open Bridge",
      windows : "Shift-Control-W" ,
      mac : "Shift-Command-W"
    },
    {
      id : 4,
      command : "Toggle between Standard mode and Quick Mask mode",
      windows : "Q" ,
      mac : "Q"
    },
    {
      id : 5,
      command : "Toggle (forward) between Standard screen mode",
      windows : "F" ,
      mac : "F"
    },
    {
      id : 6,
      command : "Toggle (backward) between Standard screen mode",
      windows : "Shift + F" ,
      mac : "Shift + F"
    },
    {
      id : 7,
      command : "Toggle (forward) canvas color",
      windows : "Spacebar + F" ,
      mac : "Spacebar + F"
    },
    {
      id : 8,
      command : "Toggle (backward) canvas color",
      windows : "Spacebar + Shift + F" ,
      mac : "Spacebar + Shift + F"
    },
    {
      id : 9,
      command : "Fit image in window",
      windows : "Double-click Hand tool" ,
      mac : "Double-click Hand tool"
    },
    {
      id : 10,
      command : "Magnify 100%",
      windows : "Double-click Zoom tool or Ctrl + 1" ,
      mac : "Double-click Zoom tool or Command + 1"
    },
    {
      id : 11,
      command : "Switch to Hand tool (when not in text-edit mode)",
      windows : "Spacebar" ,
      mac : "Spacebar"
    },
    {
      id : 12,
      command : "Simultaneously pan multiple documents with Hand tool",
      windows : "Shift-drag" ,
      mac : "Shift-drag"
    },
    {
      id : 13,
      command : "Switch to Zoom In tool",
      windows : "Control + spacebar" ,
      mac : "Command + spacebar"
    },
    {
      id : 14,
      command : "Switch to Zoom Out tool",
      windows : "Alt + spacebar" ,
      mac : "Option + spacebar"
    },
    {
      id : 15,
      command : "Move Zoom marquee while dragging with the Zoom tool",
      windows : "Spacebar-drag" ,
      mac : "Spacebar-drag"
    },
    {
      id : 16,
      command : "Apply zoom percentage, and keep zoom percentage box active",
      windows : "Shift + Enter in Navigator panel zoom percentage box" ,
      mac : "Shift + Return in Navigator panel zoom percentage box"
    },
    {
      id : 17,
      command : "Zoom in on specified area of an image",
      windows : "Control-drag over preview in Navigator panel" ,
      mac : "Control-drag over preview in Navigator panel"
    },
    {
      id : 18,
      command : "Temporarily zoom into an image",
      windows : "Hold down H and then click in the image and hold down the mouse button" ,
      mac : "Hold down H and then click in the image and hold down the mouse button"
    },
    {
      id : 19,
      command : "Scroll image with Hand tool",
      windows : "Spacebar-drag, or drag view area box in Navigator panel" ,
      mac : "Spacebar-drag, or drag view area box in Navigator panel"
    },
    {
      id : 20,
      command : "Scroll up or down 1 screen",
      windows : "Page Up or Page Down" ,
      mac : "Page Up or Page Down"
    },
    {
      id : 21,
      command : "Scroll up or down 10 units",
      windows : "Shift + Page Up or Page Down" ,
      mac : "Shift + Page Up or Page Down"
    },
    {
      id : 22,
      command : "Move view to upper-left corner or lower-right corner",
      windows : "Home or End" ,
      mac : "Home or End"
    },
    {
      id : 23,
      command : "Toggle layer mask on/off as rubylith (layer mask must be selected)",
      windows : "(backslash)" ,
      mac : "(backslash)"
    }
  ]
  const Photoshop5 = [
    {
      id : 1,
      command : "Free Transform",
      windows : "Control + T" ,
      mac : "Command + T"
    },
    {
      id : 2,
      command : "Toggle between painting and erasing",
      windows : "Hold down ` (grave accent)" ,
      mac : "Hold down ` (grave accent)"
    },
    {
      id : 3,
      command : "Decrease Brush Size",
      windows : "[" ,
      mac : "["
    },
    {
      id : 4,
      command : "Increase Brush Size",
      windows : "]" ,
      mac : "]"
    },
    {
      id : 5,
      command : "Decrease Brush Hardness",
      windows : "{" ,
      mac : "{"
    },
    {
      id : 6,
      command : "Increase Brush Hardness",
      windows : "}" ,
      mac : "}"
    },
    {
      id : 7,
      command : "Rotate the brush tip by 1 degree",
      windows : "Left Arrow/Right Arrow" ,
      mac : "Left Arrow/Right Arrow "
    },
    {
      id : 8,
      command : "Rotate the brush tip by 15 degrees",
      windows : "Shift + Left Arrow/ight Arrow" ,
      mac : "Shift + Left Arrow/Right Arrow"
    },
    {
      id : 9,
      command : "Default Foreground/Background colors",
      windows : "D" ,
      mac : "D"
    },
    {
      id : 10,
      command : "Switch Foreground/Background colors",
      windows : "X" ,
      mac : "X"
    },
    {
      id : 11,
      command : "Fit layer(s) to screen",
      windows : "Alt-click layer" ,
      mac : "Option-click layer"
    },
    {
      id : 12,
      command : "New layer via copy",
      windows : "Control + J" ,
      mac : "Command + J"
    },
    {
      id : 13,
      command : "New layer via cut",
      windows : "Shift + Control + J" ,
      mac : "Shift + Command + J"
    },
    {
      id : 14,
      command : "Add to a selection",
      windows : "Any selection tool + Shift-drag" ,
      mac : "Any selection tool + Shift-drag"
    },
    {
      id : 15,
      command : "Delete brush or swatch",
      windows : "Alt-click brush or swatch" ,
      mac : "Option-click brush or swatch"
    },
    {
      id : 16,
      command : "Toggle auto-select checkbox in Options bar with Move tool selected",
      windows : "Control-click" ,
      mac : "Command-click"
    },
    {
      id : 17,
      command : "Close all open documents other than the current document",
      windows : "Ctrl + Alt + P" ,
      mac : "Command + Option + P"
    },
    {
      id : 18,
      command : "Cancel any modal dialog window (including the Start Workspace)",
      windows : "Escape" ,
      mac : "Escape"
    },
    {
      id : 19,
      command : "Select the first edit field of the toolbar",
      windows : "Enter" ,
      mac : "Enter"
    },
    {
      id : 20,
      command : "Navigate between fields",
      windows : "Tab" ,
      mac : "Tab"
    },
    {
      id : 21,
      command : "Navigate between fields in the opposite direction",
      windows : "Tab + Shift" ,
      mac : "Tab + Shift"
    },
    {
      id : 22,
      command : "Change Cancel to Reset",
      windows : "Alt" ,
      mac : "Option"
    },
    {
      id : 23,
      command : "Use the black-and-white adjustment",
      windows : "Shift + Control + Alt + B" ,
      mac : "Shift + Command + Option B"
    },
    {
      id : 24,
      command : "Select all pins",
      windows : "Control + A" ,
      mac : "Command + A"
    },
    {
      id : 25,
      command : "Deselect all pins",
      windows : "Control + D" ,
      mac : "Command + D"
    },
    {
      id : 26,
      command : "Select multiple pins",
      windows : "Shift-click on any pin" ,
      mac : "Shift-click on any pin"
    },
    {
      id : 27,
      command : "Hide pins",
      windows : "Hold down the H key to hide the pins and release to bring back the pins" ,
      mac : "same as windows"
    },
    {
      id : 28,
      command : "Delete pins",
      windows : "Alt-click a pin" ,
      mac : "Option-click a pin"
    },
    {
      id : 29,
      command : "Reveal a circle that allows you to rotate the pin",
      windows : "Alt near to, but not over a pin" ,
      mac : "Option near to, but not over a pin"
    },
    {
      id : 30,
      command : "Cancel distortions",
      windows : "Esc" ,
      mac : "Esc"
    }
  ]
  const Photoshop6 = [
    {
      id : 1,
      command : "Reposition marquee while selecting",
      windows : "Any marquee tool + spacebar-drag" ,
      mac : "Any marquee tool + spacebar-drag"
    },
  
    {
      id : 2,
      command : "Add to a selection",
      windows : "Any selection tool + Shift-drag" ,
      mac : "Any selection tool + Shift-drag"
    },
    {
      id : 3,
      command : "Subtract from a selection",
      windows : "Any selection tool + Alt-drag" ,
      mac : "Any selection tool + Option-drag"
    },
    {
      id : 4,
      command : "Intersect a selection",
      windows : "Any selection tool + Shift-Alt-drag" ,
      mac : "Any selection tool + Shift-Option-drag"
    },
    {
      id : 5,
      command : "Constrain marquee to square or circle",
      windows : "Shift-drag" ,
      mac : "Shift-drag"
    },
    {
      id : 6,
      command : "Draw marquee from center",
      windows : "Alt-drag" ,
      mac : "Option-drag"
    },
    {
      id : 7,
      command : "Constrain shape and draw marquee from center",
      windows : "Shift + Alt-drag" ,
      mac : "Shift + Option-drag"
    },
    {
      id : 8,
      command : "Switch to Move tool",
      windows : "Control" ,
      mac : "command"
    },
    {
      id : 9,
      command : "Switch from Magnetic Lasso tool to Lasso tool",
      windows : "Alt-drag" ,
      mac : "Option-drag"
    },
    {
      id : 10,
      command : "Switch from Magnetic Lasso tool to polygonal Lasso tool",
      windows : "Alt-click" ,
      mac : "Option-click"
    },
    {
      id : 11,
      command : "Apply/cancel an operation of the Magnetic Lasso",
      windows : "Enter/Esc or Control + . (period)" ,
      mac : "Return/Esc or Command + . (period)"
    },
    {
      id : 12,
      command : "Move copy of selection",
      windows : "Move tool + Alt-drag selection" ,
      mac : "Move tool + Option-drag selection"
    },
    {
      id : 14,
      command : "Move selection area 1 pixel",
      windows : "Any selection + direction arrows" ,
      mac : "Any selection + direction arrows"
    },
    {
      id : 15,
      command : "Move selection 1 pixel",
      windows : "Move tool + direction arrows" ,
      mac : "Move tool + direction arrows"
    },
    {
      id : 16,
      command : "Move layer 1 pixel when nothing selected",
      windows : "Control + direction arrows" ,
      mac : "Command + direction arrows"
    },
    {
      id : 17,
      command : "Increase/decrease detection width",
      windows : "Magnetic Lasso tool + [ or ]" ,
      mac : "Magnetic Lasso tool + [ or ]"
    },
    {
      id : 18,
      command : "Accept cropping or exit cropping",
      windows : "Crop tool + Enter or Esc" ,
      mac : "Crop tool + Return or Esc"
    },
    {
      id : 19,
      command : "Toggle crop shield off and on",
      windows : "/ (forward slash)" ,
      mac : "/ (forward slash)"
    },
    {
      id : 20,
      command : "Make protractor",
      windows : "Ruler tool + Alt-drag end point" ,
      mac : "Ruler tool + Option-drag end point"
    },
    {
      id : 21,
      command : "Snap guide to ruler ticks ",
      windows : "Shift-drag guide" ,
      mac : "Shift-drag guide"
    },
    {
      id : 22,
      command : "Convert between horizontal and vertical",
      windows : "Alt-drag guide" ,
      mac : "Option-drag guide"
    }
  ]
  const PhotoshopButton = [
    {
      id: 1,
      title: "Popular",
      function: setPhotoshopData1
    },
    {
      id: 2,
      title: "Use Function",
      function: setPhotoshopData2
    },
    {
      id: 3,
      title: "Selection Tools",
      function: setPhotoshopData3
    },
    {
      id: 4,
      title: "View Image",
      function: setPhotoshopData4
    },
    {
      id: 5,
      title: "Use Puppet Wrap",
      function: setPhotoshopData5
    },
    {
      id: 6,
      title: "Move Object",
      function: setPhotoshopData6
    }
  ]

  /* ChromeData */

  const setChromeData1 = () => {
    setData(Chrome1)
  }
  const setChromeData2 = () => {
    setData(Chrome2)
  }
  const setChromeData3 = () => {
    setData(Chrome3)
  }
  const setChromeData4 = () => {
    setData(Chrome4)
  }
  const setChromeData5 = () => {
    setData(Chrome5)
  }
  const Chrome1 = [
    {
      id : 1,
      command : "Open new window",
      windows : "Ctrl + N" ,
      mac : "Cmd + N"
    },
    {
      id : 2,
      command : "Open new incognito window",
      windows : "Ctrl + Shift + N" ,
      mac : "Cmd + Shift + N"
    },
    {
      id : 3,
      command : "Open new tab",
      windows : "Ctrl + T" ,
      mac : "Cmd + T"
    },
    {
      id : 4,
      command : "Close current tab",
      windows : "Ctrl + W" ,
      mac : "Cmd + W"
    },
    {
      id : 5,
      command : "Close current window",
      windows : "Ctrl + Shift + W" ,
      mac : "Cmd + Shift + W"
    },
    {
      id : 6,
      command : "Reopen last closed tab",
      windows : "Ctrl + Shift + T" ,
      mac : "Cmd + Shift + T"
    },
    {
      id : 7,
      command : "Switch to tab 1-8",
      windows : "Ctrl + 1 — Ctrl + 8" ,
      mac : "Cmd + 1 — Cmd + 8"
    },
    {
      id : 8,
      command : "Switch to last tab",
      windows : "Ctrl + 9" ,
      mac : "Ctrl + 9"
    },
    {
      id : 9,
      command : "Move to next tab",
      windows : "Ctrl +Tab" ,
      mac : "Cmd + Option + Right"
    },
    {
      id : 10,
      command : "Open new window",
      windows : "Ctrl + N" ,
      mac : "Cmd + N"
    },
    {
      id : 11,
      command : "Move to prior tab",
      windows : "Ctrl + Shift + Tab" ,
      mac : "Cmd + Option + Left"
    },
    {
      id : 12,
      command : "Open link in a new tab",
      windows : "Ctrl + Click" ,
      mac : "Cmd + Click"
    },
    {
      id : 13,
      command : "Open link in a new tab",
      windows : "Ctrl + Shift + Click" ,
      mac : "Cmd + Shift + Click"
    },
    {
      id : 14,
      command : "Open link in a new window",
      windows : "Shift + Click" ,
      mac : "Shift + Click"
    },
    {
      id : 15,
      command : "Go back one page",
      windows : "Alt + Left" ,
      mac : "Cmd + ["
    },
    {
      id : 16,
      command : "Go forward one page",
      windows : "Alt + Right" ,
      mac : "Cmd + ]"
    },
    {
      id : 17,
      command : "Open your homepage in the current tab",
      windows : "Alt + Home" ,
      mac : "Cmd + Shift + H"
    },
    {
      id : 18,
      command : "Quit Chrome",
      windows : "Ctrl + Shift + Q" ,
      mac : "Cmd + Q"
    }
  ]
  const Chrome2 = [
    {
      id : 1,
      command : "Zoom in",
      windows : "Ctrl + Plus (+)" ,
      mac : "Cmd + Plus (+)"
    },
    {
      id : 2,
      command : "Zoom out",
      windows : "Ctrl + Minus (-)" ,
      mac : "Cmd + Minus (-)"
    },
    {
      id : 3,
      command : "Reset zoom to 100%",
      windows : "Ctrl + 0 (Zero)" ,
      mac : "Cmd + 0 (Zero"
    },
    {
      id : 4,
      command : "Toggle full-screen mode",
      windows : "F11" ,
      mac : "Cmd + Ctrl + F"
    },
    {
      id : 5,
      command : "Search the current page",
      windows : "Ctrl + F" ,
      mac : "Cmd + F"
    },
    {
      id : 6,
      command : "Move down the page",
      windows : "Space" ,
      mac : "Space"
    },
    {
      id : 7,
      command : "Move up the page",
      windows : "Shift + Space" ,
      mac : "Shift + Space"
    },
    {
      id : 8,
      command : "Go to top of current page",
      windows : "Home" ,
      mac : "Cmd + Up"
    },
    {
      id : 9,
      command : "Go to bottom of current page",
      windows : "End" ,
      mac : "Cmd + Down"
    },
    {
      id : 10,
      command : "Select all text in the address bar",
      windows : "Ctrl + L" ,
      mac : "Cmd + L"
    }
  ]
  const Chrome3 = [
    {
      id : 1,
      command : "Delete previous word",
      windows : "Ctrl + Backspace" ,
      mac : "Option + Delete"
    },
    {
      id : 2,
      command : "Delete next word",
      windows : "Ctrl + Alt + Backspace" ,
      mac : "Option + Fn + Delete"
    },
    {
      id : 3,
      command : "Select all",
      windows : "Ctrl + A" ,
      mac : "Cmd + A"
    },
    {
      id : 4,
      command : "Move the cursor to the next/previous word",
      windows : "Ctrl + Right/Left" ,
      mac : "Option + Right/Left"
    },
    {
      id : 5,
      command : "Select next/previous word of the current line",
      windows : "Ctrl + Shift + Right/Left" ,
      mac : "Option + Shift + Right/Left"
    },
    {
      id : 6,
      command : "Select all text to the end/beginning of the current line",
      windows : "Ctrl + Shift + End/Home" ,
      mac : "Command + Shift + Right/Left"
    },
    {
      id : 7,
      command : "Jump to the end/beginnning of a text field",
      windows : "Ctrl + End/Home" ,
      mac : "Cmd + Down/Up"
    },
    {
      id : 8,
      command : "Copy",
      windows : "Ctrl + C" ,
      mac : "Cmd + C"
    },
    {
      id : 9,
      command : "Cut",
      windows : "Ctrl + X" ,
      mac : "Cmd + X"
    },
    {
      id : 10,
      command : "Paste",
      windows : "Ctrl + V" ,
      mac : "Cmd + V"
    },
    {
      id : 11,
      command : "Paste without formatting",
      windows : "Ctrl + Shift + V" ,
      mac : "Cmd + Shift + V"
    },
    {
      id : 12,
      command : "Undo",
      windows : "Ctrl + Z" ,
      mac : "Cmd + Z"
    },
    {
      id : 13,
      command : "Redo",
      windows : "Ctrl + Y" ,
      mac : "Cmd + Shift + Z"
    }
  ]
  const Chrome4 = [
    {
      id : 1,
      command : "Open Print dialog",
      windows : "Ctrl + P" ,
      mac : "Cmd + P"
    },
    {
      id : 2,
      command : "Save the current webpage",
      windows : "Ctrl + S" ,
      mac : "Cmd + S"
    },
    {
      id : 3,
      command : "Refresh the page",
      windows : "Ctrl + R" ,
      mac : "Cmd + R"
    },
    {
      id : 4,
      command : "Refresh the page without loading cache",
      windows : "Ctrl + Shift + R" ,
      mac : "Cmd + Shift + R"
    },
    {
      id : 5,
      command : "Stop page from loading",
      windows : "Esc" ,
      mac : "Cmd + PEsc"
    },
    {
      id : 6,
      command : "Open a file",
      windows : "Ctrl + O" ,
      mac : "Cmd + O"
    },
    {
      id : 7,
      command : "View History",
      windows : "Ctrl + H" ,
      mac : "Cmd + Y"
    },
    {
      id : 8,
      command : "Open Downloads",
      windows : "Ctrl + J" ,
      mac : "Cmd + Shift + J"
    },
    {
      id : 9,
      command : "Bookmark current page",
      windows : "Ctrl + D" ,
      mac : "Cmd + D"
    },
    {
      id : 10,
      command : "Bookmark all open tabs",
      windows : "Ctrl + Shift + D" ,
      mac : "Cmd + Shift + D"
    },
    {
      id : 11,
      command : "Toggle bookmarks bar",
      windows : "Ctrl + Shift + B" ,
      mac : "Cmd + Shift + B"
    },
    {
      id : 12,
      command : "Open Chrome's menu",
      windows : "Alt + E" ,
      mac : "------"
    },
    {
      id : 13,
      command : "Open Bookmark Manager",
      windows : "Ctrl + Shift + O" ,
      mac : "Cmd + Option + B"
    },
    {
      id : 14,
      command : "Open Chrome Task Manager",
      windows : "Search + Esc" ,
      mac : "------"
    },
    {
      id : 15,
      command : "View page source",
      windows : "Ctrl + U" ,
      mac : "Cmd + Option + U"
    },
    {
      id : 16,
      command : "Open the Developer Toolspane",
      windows : "Ctrl + Shift + J" ,
      mac : "Cmd + Option + I"
    },
    {
      id : 17,
      command : "Open Clear Browsing Data menu",
      windows : "Ctrl + Shift + Del" ,
      mac : "Cmd + Shift + Delete"
    },
    {
      id : 18,
      command : "Open Users menu to log in",
      windows : "Ctrl + Shift + M" ,
      mac : "Cmd + Shift + M"
    }
  ]
  const Chrome5 = [
    {
      id : 1,
      command : "Add www. and .com to text in the address bar and open page",
      windows : "Ctrl + Enter" ,
      mac : "Cmd + Enter"
    },
    {
      id : 2,
      command : "Moves cursor to the address bar to perform a Google search",
      windows : "Ctrl + K" ,
      mac : "Cmd + Option + F"
    },
    {
      id : 3,
      command : "Highlight bookmarks bar; use arrows to navigate",
      windows : "Shift + Alt + B" ,
      mac : "------"
    },
    {
      id : 4,
      command : "Highlight the icons in the address bar row",
      windows : "Shift + Alt + T" ,
      mac : "------"
    },
    {
      id : 5,
      command : "Download the target of a link",
      windows : "Alt + Click" ,
      mac : "Option + Click"
    },
    {
      id : 6,
      command : "Maximize current window",
      windows : "Alt + Space + N" ,
      mac : "------"
    },
    {
      id : 7,
      command : "Minimize current window",
      windows : "Alt + Space + X" ,
      mac : "Cmd + M"
    },
    {
      id : 8,
      command : "Open Chrome help",
      windows : "F1" ,
      mac : "------"
    },
    {
      id : 9,
      command : "Open a form to send feedback on Chrome",
      windows : "Alt + Shift + I" ,
      mac : "------"
    }
  ]
  const ChromeButton = [
    {
      id: 1,
      title: "Navigation",
      function: setChromeData1
    },
    {
      id: 2,
      title: "Webpage",
      function: setChromeData2
    },
    {
      id: 3,
      title: "Text Editing",
      function: setChromeData3
    },
    {
      id: 4,
      title: "General",
      function: setChromeData4
    },
    {
      id: 5,
      title: "Miscellaneous",
      function: setChromeData5
    }
  ]

  /* WordData */
  const setWordData1 = () => {
    setData(Word1)
  }
  const setWordData2 = () => {
    setData(Word2)
  }
  const setWordData3 = () => {
    setData(Word3)
  }
  const setWordData4 = () => {
    setData(Word4)
  }
  const Word1 = [
    {
      id : 1,
      command : "Switch to Print Layout view",
      info : "Alt + Ctrl + P" 
    },
    {
      id : 2,
      command : "Switch to Outline view",
      info : "Alt+ Ctrl+ O" 
    },
    {
      id : 3,
      command : "Switch to Draft view",
      info : "Alt + Ctrl + N" 
    },
    {
      id : 4,
      command : "Promote paragraph",
      info : "Alt + Ctrl + ←" 
    },
    {
      id : 5,
      command : "Demote paragraph ",
      info : "Alt + Shift + →" 
    },
    {
      id : 6,
      command : "Demote to body text ",
      info : "Alt + Shift + N" 
    },
    {
      id : 7,
      command : "Split the document window; repeat to remove",
      info : "Alt + Ctrl + S" 
    }
  ]
  const Word2 = [
    {
      id : 1,
      command : "Center",
      info : "Ctrl + E" 
    },
    {
      id : 2,
      command : "Justify",
      info : "Ctrl+ J" 
    },
    {
      id : 3,
      command : "Left-align",
      info : "Ctrl + L" 
    },
    {
      id : 4,
      command : "Right-align",
      info : "Ctrl + R" 
    },
    {
      id : 5,
      command : "Indent from left",
      info : "Ctrl + M" 
    },
    {
      id : 6,
      command : "Decrease indent from left",
      info : "Ctrl + Shift + M" 
    },
    {
      id : 7,
      command : "Create hanging indent",
      info : "Ctrl + T" 
    },
    {
      id : 8,
      command : "Decrease hanging indent",
      info : "Ctrl + Shift + T" 
    },
    {
      id : 9,
      command : "Single space lines",
      info : "Ctrl + 1" 
    },
    {
      id : 9,
      command : "Double space lines",
      info : "Ctrl + 2" 
    },
    {
      id : 10,
      command : "One-and-one-half space lines",
      info : "Ctrl + 5" 
    },
    {
      id : 11,
      command : "agAdd/close space B4 paragraphg",
      info : "Ctrl + 0(zero)" 
    },
    {
      id : 12,
      command : "Remove paragraph formatting",
      info : "Ctrl + Q" 
    },
    {
      id : 13,
      command : "Format Painter",
      info : "Ctrl + Shift + C" 
    },
    {
      id : 14,
      command : "Apply copied formatting to text",
      info : "Ctrl + Shift  V" 
    }
  ]
  const Word3 = [
    {
      id : 1,
      command : "Bold",
      info : "Ctrl + B" 
    },
    {
      id : 2,
      command : "Italics",
      info : "Ctrl + I" 
    },
    {
      id : 3,
      command : "Underline (continuous)",
      info : "Ctrl + U" 
    },
    {
      id : 4,
      command : "Word underline",
      info : "Ctrl + Shift + W" 
    },
    {
      id : 5,
      command : "Double-underline ",
      info : "Ctrl + Shift + D" 
    },
    {
      id : 6,
      command : "Font (Font dialog box)",
      info : "Ctrl + Shift + F" 
    },
    {
      id : 7,
      command : "Point size (Font dialog box)",
      info : "Ctrl + Shift + P" 
    },
    {
      id : 8,
      command : "Hidden",
      info : "Ctrl + Shift + H" 
    },
    {
      id : 9,
      command : "Change letter case",
      info : "Ctrl + F3" 
    },
    {
      id : 10,
      command : "All Caps",
      info : "Ctrl + Shift + A" 
    },
    {
      id : 11,
      command : "Small caps",
      info : "Ctrl + Shift + A" 
    },
    {
      id : 12,
      command : "Subscript",
      info : "Ctrl + =" 
    },
    {
      id : 13,
      command : "Superscript",
      info : "Ctrl + (+)" 
    },
    {
      id : 14,
      command : "Increase font size one value",
      info : "Ctrl + Shift + >" 
    },
    {
      id : 15,
      command : "Decrease font size one value",
      info : "Ctrl + Shift + <" 
    },
    {
      id : 16,
      command : "Increase by 1 point",
      info : "Ctrl + ]" 
    },
    {
      id : 17,
      command : "Decrease by 1 point",
      info : "Ctrl + [" 
    },
    {
      id : 18,
      command : "Insert copyright symbol",
      info : "Alt + Ctrl + C" 
    },
    {
      id : 19,
      command : "Insert registered trademark symbol",
      info : "Alt + Ctrl + R" 
    },
    {
      id : 20,
      command : "Insert trademark symbol",
      info : "Alt + Ctrl + T" 
    },
    {
      id : 21,
      command : "Remove manual formatting",
      info : "Ctrl + Shift + Z" 
    },
    {
      id : 22,
      command : "Format Painter",
      info : "Ctrl + Shift + C" 
    },
    {
      id : 23,
      command : "Apply copied formatting to text",
      info : "Ctrl + Shift + V" 
    },
    {
      id : 24,
      command : "Bold ",
      info : "Ctrl" 
    }
  ]
  const Word4 = [
    {
      id : 1,
      command : "Open Apply Styles task pane",
      info : "Ctrl + Shift + S" 
    },
    {
      id : 2,
      command : "Open Styles task pane",
      info : "Alt + Ctrl + Shift + S" 
    },
    {
      id : 3,
      command : "Apply the Normal style",
      info : "Ctrl + Shift + N" 
    },
    {
      id : 4,
      command : "Apply the Heading 1 style ",
      info : "Ctrl + Shift + 1" 
    },
    {
      id : 5,
      command : "Apply the Heading 2 style",
      info : "Ctrl + Shift + 2" 
    },
    {
      id : 5,
      command : "Apply the Heading 3 style",
      info : "Ctrl + Shift + 3" 
    }
  ]
  const WordButton = [
    {
      id: 1,
      title: "View Keys",
      function: setWordData1
    },
    {
      id: 2,
      title: "Paragraph Keys",
      function: setWordData2
    },
    {
      id: 3,
      title: "Character Keys",
      function: setWordData3
    },
    {
      id: 4,
      title: "Styles Keys",
      function: setWordData4
    }
  ]

  /* PowerpointData */
  const setPowerpointData1 = () => {
    setData(Powerpoint1)
  }
  const setPowerpointData2 = () => {
    setData(Powerpoint2)
  }
  const setPowerpointData3 = () => {
    setData(Powerpoint3)
  }
  const setPowerpointData4 = () => {
    setData(Powerpoint4)
  }
  const setPowerpointData5 = () => {
    setData(Powerpoint5)
  }
  const setPowerpointData6 = () => {
    setData(Powerpoint6)
  }
  const Powerpoint1 = [
    {
      id : 1,
      command : "Save a presentation",
      info : "CTRL+S" 
    },
    {
      id : 2,
      command : "Print a presentation",
      info : "CTRL+P" 
    },
    {
      id : 3,
      command : "Open a presentation",
      info : "CTRL+O" 
    },
    {
      id : 4,
      command : "Create a new presentation",
      info : "CTRL+N" 
    },
    {
      id : 5,
      command : "New slide",
      info : "CTRL+M" 
    },
    {
      id : 6,
      command : "Duplicate",
      info : "CTRL+D" 
    },
    {
      id : 7,
      command : "Cut",
      info : "CTRL+X" 
    },
    {
      id : 8,
      command : "Copy",
      info : "CTRL+C" 
    },
    {
      id : 9,
      command : "Paste",
      info : "CTRL+V" 
    },
    {
      id : 10,
      command : "Undo (last action)",
      info : "CTRL+Z" 
    },
    {
      id : 11,
      command : "Redo (last action)/repeat",
      info : "CTRL+Y or F4" 
    },
    {
      id : 12,
      command : "Select all",
      info : "CTRL+A" 
    },
    {
      id : 13,
      command : "Close active presentation",
      info : "CTRL+W or CTRL+F4" 
    },
    {
      id : 14,
      command : "Close PowerPoint",
      info : "CTRL+Q or ALT+F4" 
    }
  ]
  const Powerpoint2 = [
    {
      id : 1,
      command : "First slide",
      info : "CTRL+HOME" 
    },
    {
      id : 2,
      command : "Last slide",
      info : "CTRL+END" 
    },
    {
      id : 3,
      command : "Next slide (depending on Zoom)",
      info : "PAGE DOWN" 
    },
    {
      id : 4,
      command : "Previous slide (depending on Zoom)",
      info : "PAGE UP" 
    },
    {
      id : 5,
      command : "Move from pane to pane",
      info : "F6" 
    }
  ]
  const Powerpoint3 = [
    {
      id : 1,
      command : "One character to the left",
      info : "LfBtn" 
    },
    {
      id : 2,
      command : "One character to the right",
      info : "RgBtn" 
    },
    {
      id : 3,
      command : "One line up",
      info : "UpBtn" 
    },
    {
      id : 4,
      command : "One line down",
      info : "DwBtn" 
    },
    {
      id : 5,
      command : "One word to the left",
      info : "CTRL+LfBtn" 
    },
    {
      id : 6,
      command : "One word to the right",
      info : "CTRL+RgBtn" 
    },
    {
      id : 7,
      command : "To the end of a line",
      info : "END" 
    },
    {
      id : 8,
      command : "To the beginning of a line",
      info : "HOME" 
    },
    {
      id : 9,
      command : "Up one paragraph",
      info : "CTRL+UpBtn" 
    },
    {
      id : 10,
      command : "Down one paragraph",
      info : "CTRL+DwBtn" 
    },
    {
      id : 11,
      command : "To the end of a text box",
      info : "CTRL+END" 
    },
    {
      id : 12,
      command : "To the beginning of a text box",
      info : "CTRL+HOME" 
    },
    {
      id : 13,
      command : "To the next title or body text placeholder",
      info : "CTRL+ENTER" 
    },
    {
      id : 14,
      command : "Find",
      info : "CTRL+F or F4" 
    },
    {
      id : 15,
      command : "To repeat the last Find action",
      info : "SHIFT+F4" 
    }
  ]
  const Powerpoint4 = [
    {
      id : 1,
      command : "Draw a perfect shape (constrain)",
      info : "Hold SHIFT while dragging/drawing" 
    },
    {
      id : 2,
      command : "Show/Hide ruler",
      info : "SHIFT+ALT+F9" 
    },
    {
      id : 3,
      command : "Show/Hide gridlines",
      info : "SHSHIFT+F9IFT" 
    },
    {
      id : 4,
      command : "Show/Hide guides",
      info : "ALT+F9" 
    },
    {
      id : 5,
      command : "Select one character to the right",
      info : "SHIFT+LfBtn" 
    },
    {
      id : 6,
      command : "Select one character to the left",
      info : "SHIFT+RgBtn" 
    },
    {
      id : 7,
      command : "Select to the end of a word",
      info : "CTRL+SHIFT+LfBtn" 
    },
    {
      id : 8,
      command : "Select to the beginning of a word",
      info : "CTRL+SHIFT+RgBtn" 
    },
    {
      id : 9,
      command : "Select one line up",
      info : "SHIFT+UpBtn" 
    },
    {
      id : 10,
      command : "Select one line down",
      info : "SHIFT+DwBtn" 
    },
    {
      id : 11,
      command : "Select multiple objects",
      info : "Hold SHIFT and click" 
    },
    {
      id : 12,
      command : "Select an object",
      info : "TAB or SHIFT+TAB until the object you want is selected" 
    },
    {
      id : 13,
      command : "Select all objects (slide view)",
      info : "CTRL+A" 
    },
    {
      id : 14,
      command : "Select all slides (slide sorter view)",
      info : "CTRL+A" 
    },
    {
      id : 15,
      command : "Select all text (outline view)",
      info : "CTRL+A" 
    }
  ]
  const Powerpoint5 = [
    {
      id : 1,
      command : "Copy a shape",
      info : "CTRL+D or hold CTRL while dragging the shape" 
    },
    {
      id : 2,
      command : "Copy a shape and align with original",
      info : "Hold CTRL+SHIFT while dragging" 
    },
    {
      id : 3,
      command : "Delete one character to the left",
      info : "BACKSPACE" 
    },
    {
      id : 4,
      command : "Delete one word to the left",
      info : "CTRL+BACKSPACE" 
    },
    {
      id : 5,
      command : "Delete one character to the right",
      info : "DELETE" 
    },
    {
      id : 6,
      command : "Delete one word to the right",
      info : "CTRL+DELETE" 
    },
    {
      id : 7,
      command : "Cut selected object",
      info : "CTRL+X" 
    },
    {
      id : 8,
      command : "Copy selected object",
      info : "CTRL+C" 
    },
    {
      id : 9,
      command : "Paste cut or copied object",
      info : "CTRL+V" 
    },
    {
      id : 10,
      command : "Undo the last action",
      info : "CTRL+Z" 
    }
  ]
  const Powerpoint6 = [
    {
      id : 1,
      command : "Switch between Outline and Slides pane in Normal View",
      info : "CTRL+SHIFT+TAB" 
    },
    {
      id : 2,
      command : "Promote a paragraph",
      info : "SHIFT+TAB" 
    },
    {
      id : 3,
      command : "Demote a paragraph",
      info : "TAB" 
    },
    {
      id : 4,
      command : "Move selected paragraphs up",
      info : "ALT+SHIFT+UpBtn" 
    },
    {
      id : 5,
      command : "Move selected paragraphs down",
      info : "ALT+SHIFT+DwBtn" 
    },
    {
      id : 6,
      command : "Show heading level 1",
      info : "ALT+SHIFT+1" 
    },
    {
      id : 7,
      command : "Expand text below a heading",
      info : "ALT+SHIFT+PLUS" 
    },
    {
      id : 8,
      command : "Collapse text below a heading",
      info : "ALT+SHIFT+MINUS" 
    },
    {
      id : 9,
      command : "Show all text or headings",
      info : "ALT+SHIFT+A *" 
    }
  ]
  const PowerpointButton = [
    {
      id: 1,
      title: "Helpful Shortcuts",
      function: setPowerpointData1
    },
    {
      id: 2,
      title: "Presentation",
      function: setPowerpointData2
    },
    {
      id: 3,
      title: "Moving Text",
      function: setPowerpointData3
    },
    {
      id: 4,
      title: "Selecting Text",
      function: setPowerpointData4
    },
    {
      id: 5,
      title: "Copying",
      function: setPowerpointData5
    },
    {
      id: 6,
      title: "Outline",
      function: setPowerpointData6
    }
  ]

  /* VSData */
  const setVsData1 = () => {
    setData(Vs1)
  }
  const setVsData2 = () => {
    setData(Vs2)
  }
  const setVsData3 = () => {
    setData(Vs3)
  }
  const setVsData4 = () => {
    setData(Vs4)
  }
  const setVsData5 = () => {
    setData(Vs5)
  }
  const setVsData6 = () => {
    setData(Vs6)
  }
  const setVsData7 = () => {
    setData(Vs7)
  }
  const Vs1 = [
    {
      id : 1,
      command : "Create new project",
      info : "Ctrl + Shift + N" 
    },
    {
      id : 2,
      command : "Open file",
      info : "Ctrl + O" 
    },
    {
      id : 3,
      command : "Open project",
      info : "Ctrl + Shift + O" 
    },
    {
      id : 4,
      command : "Save current file",
      info : "Ctrl + S" 
    },
    {
      id : 5,
      command : "Copy",
      info : "Ctrl + C" 
    },
    {
      id : 6,
      command : "Paste",
      info : "Ctrl + V" 
    },
    {
      id : 7,
      command : "Paste an item from the Clipboard",
      info : "Ctrl + Shift + V" 
    },
    {
      id : 8,
      command : "Cut",
      info : "Ctrl + X" 
    },
    {
      id : 9,
      command : "Redo",
      info : "Ctrl + Shift + Z" 
    },
    {
      id : 10,
      command : "Undo",
      info : "Ctrl + Z" 
    },
    {
      id : 11,
      command : "Save all files",
      info : "Ctrl + Shift + S" 
    },
    {
      id : 12,
      command : "Add item to project",
      info : "Ctrl + Shift + A" 
    },
    {
      id : 13,
      command : "Close menu or dialogue",
      info : "Esc" 
    },
    {
      id : 14,
      command : "Print",
      info : "Ctrl + P" 
    },
    {
      id : 15,
      command : "Full-screen mode",
      info : "Shift + Alt + Enter" 
    },
    {
      id : 16,
      command : "Close current tab",
      info : "Ctrl + F4" 
    },
    {
      id : 17,
      command : "Go to the next window",
      info : "Ctrl + F6" 
    },
    {
      id : 18,
      command : "Go to the previous window",
      info : "Ctrl + Shift + F6" 
    },
    {
      id : 19,
      command : "Diagram",
      info : "Ctrl + 1" 
    },
    {
      id : 20,
      command : "Criteria",
      info : "Ctrl + 2" 
    },
    {
      id : 21,
      command : "SQL",
      info : "Ctrl + 3" 
    },
    {
      id : 22,
      command : "Rename",
      info : "F2" 
    },
    {
      id : 23,
      command : "Results",
      info : "Ctrl + 4" 
    }
  ]
  const Vs2 = [
    {
      id : 1,
      command : "Find and Replace the dialogue box",
      info : "Ctrl + F" 
    },
    {
      id : 2,
      command : "Find next",
      info : "F3" 
    },
    {
      id : 3,
      command : "Find Previous",
      info : "Shift + F3" 
    },
    {
      id : 4,
      command : "Display Replace options",
      info : "Ctrl + H" 
    },
    {
      id : 5,
      command : "Find all references for the selected symbol",
      info : "Shift + F12" 
    },
    {
      id : 6,
      command : "Find in files",
      info : "Ctrl + Shift + F" 
    },
    {
      id : 7,
      command : "Find next in the selected text",
      info : "Ctrl + F3" 
    },
    {
      id : 8,
      command : "Find previous in the selected text",
      info : "Ctrl + Shift + F3" 
    },
    {
      id : 9,
      command : "Find Symbol",
      info : "Alt + F12" 
    },
    {
      id : 10,
      command : "Put the cursor in the find or command box",
      info : "Ctrl + D" 
    },
    {
      id : 11,
      command : "Incremental search",
      info : "Ctrl + I" 
    },
    {
      id : 12,
      command : "Reverse incremental search",
      info : "Ctrl + Shift + I" 
    },
    {
      id : 13,
      command : "Quick find symbol",
      info : "Shift + Alt + F12" 
    },
    {
      id : 14,
      command : "Display Navigate",
      info : "Ctrl + ," 
    },
    {
      id : 15,
      command : "Go to line number",
      info : "Ctrl + G" 
    },
    {
      id : 16,
      command : "Select All",
      info : "Ctrl + A" 
    },
    {
      id : 17,
      command : "Go to the matching brace in the source file",
      info : "Ctrl + ]" 
    },
    {
      id : 18,
      command : "Jump to the next occurrence of the highlighted symbol",
      info : "Shift + Ctrl + Down Arrow key" 
    },
    {
      id : 19,
      command : "Jump to the previous occurrence of the highlighted symbol",
      info : "Shift + Ctrl + Up Arrow key" 
    },
    {
      id : 20,
      command : "Extend selection to the end of the document",
      info : "Ctrl + Shift + End" 
    },
    {
      id : 21,
      command : "Extend selection to the beginning of the document",
      info : "Ctrl + Shift + Home" 
    },
    {
      id : 22,
      command : "Extend selection to the next brace",
      info : "Ctrl + Shift + ]" 
    },
    {
      id : 23,
      command : "Extend selection to end of line",
      info : "Shift + End" 
    },
    {
      id : 24,
      command : "Extend selection to the beginning of a line",
      info : "Shift + Home" 
    },
    {
      id : 25,
      command : "Extends selection down one page",
      info : "Shift + Page Down key" 
    },
    {
      id : 26,
      command : "Extends selection up one page",
      info : "Shift + Page Up key" 
    },
    {
      id : 27,
      command : "Select current word",
      info : "Ctrl + W" 
    },
    {
      id : 28,
      command : "Extend selection to the last line in view",
      info : "Ctrl + Shift + Page Down key" 
    },
    {
      id : 29,
      command : "Extend selection to the first line in view",
      info : "Ctrl + Shift + Page Up key" 
    },
    {
      id : 30,
      command : "Extend the selection one word to the right",
      info : "Ctrl + Shift + Right Arrow key" 
    },
    {
      id : 31,
      command : "Extend the selection one word to the left",
      info : "Ctrl + Shift + Left Arrow key" 
    }
  ]
  const Vs3 = [
    {
      id : 1,
      command : "Collapse or un-collapse current preset area",
      info : "Ctrl + M + M" 
    },
    {
      id : 2,
      command : "Collapse or hide current selection",
      info : "Ctrl + M + H" 
    },
    {
      id : 3,
      command : "Collapse declaration bodies",
      info : "Ctrl + M + O" 
    },
    {
      id : 4,
      command : "Collapse all",
      info : "Ctrl + M + A" 
    },
    {
      id : 5,
      command : "Uncollapse all",
      info : "Ctrl + M + X" 
    },
    {
      id : 6,
      command : "Collapse HTML tag",
      info : "Ctrl + M" 
    },
    {
      id : 7,
      command : "Delete current line",
      info : "Ctrl + L" 
    },
    {
      id : 8,
      command : "Delete the word to the right of the cursor",
      info : "Ctrl + Delete" 
    },
    {
      id : 9,
      command : "Delete the word to the left of the cursor",
      info : "Ctrl + Backspace" 
    },
    {
      id : 11,
      command : "Enter a blank line above the cursor",
      info : "Ctrl + Enter" 
    },
    {
      id : 12,
      command : "Enter a blank line below the cursor",
      info : "Ctrl + Shift + Enter" 
    },
    {
      id : 13,
      command : "Make uppercase",
      info : "Ctrl + Shift + U" 
    },
    {
      id : 14,
      command : "Make lowercase",
      info : "Ctrl + U" 
    },
    {
      id : 15,
      command : "Comment selected text",
      info : "Ctrl + K + C" 
    },
    {
      id : 16,
      command : "Uncomment selected text",
      info : "Ctrl + K + U" 
    },
    {
      id : 17,
      command : "Remove white space and tabs in the selection",
      info : "Ctrl + K + (backslash)"
    },
    {
      id : 18,
      command : "Format document to code formatting settings",
      info : "Ctrl + K + D" 
    },
    {
      id : 19,
      command : "Format selection to code formatting settings",
      info : "Ctrl + K + F" 
    },
    {
      id : 20,
      command : "Display parameter required for the selected method",
      info : "Ctrl + Shift + Spacebar" 
    },
    {
      id : 21,
      command : "Visualize whitespace",
      info : "Ctrl + Shift + 8" 
    },
    {
      id : 22,
      command : "Autocomplete words from the completion list",
      info : "Ctrl + Spacebar" 
    },
    {
      id : 23,
      command : "Show parameter info",
      info : "Ctrl + Shift + Spacebar" 
    },
    {
      id : 24,
      command : "Display symbol declaration",
      info : "Ctrl + F12" 
    },
    {
      id : 25,
      command : "Display symbol definition",
      info : "F12" 
    },
    {
      id : 26,
      command : "Open the IntelliSense completion list",
      info : "Ctrl + J" 
    }
  ]
  const Vs4 = [
    {
      id : 1,
      command : "Toggle bookmark",
      info : "Ctrl + K + K" 
    },
    {
      id : 2,
      command : "Go to the next bookmark",
      info : "Ctrl + K + N" 
    },
    {
      id : 3,
      command : "Go to the previous bookmark",
      info : "Ctrl + K + P" 
    },
    {
      id : 4,
      command : "Go to the next bookmark in the folder",
      info : "Ctrl + Shift + K + N" 
    },
    {
      id : 5,
      command : "Go to the previous bookmark in the folder",
      info : "Ctrl + Shift + K + P" 
    },
    {
      id : 6,
      command : "Put the focus on the bookmark window",
      info : "Ctrl + K + W" 
    },
    {
      id : 7,
      command : "Leave the bookmark window and focus on the editor",
      info : "Esc" 
    },
    {
      id : 8,
      command : "Toggle the code shortcut at the current line",
      info : "Ctrl + K + H" 
    },
    {
      id : 9,
      command : "Clear all bookmarks",
      info : "Ctrl + K + L" 
    }
  ]
  const Vs5 = [
    {
      id : 1,
      command : "If block",
      info : "I" 
    },
    {
      id : 2,
      command : "Else block",
      info : "E + L" 
    },
    {
      id : 3,
      command : "Do While Loop block",
      info : "D + O" 
    },
    {
      id : 4,
      command : "For Loop block",
      info : "F + O + R" 
    },
    {
      id : 5,
      command : "While loop block",
      info : "W + H" 
    },
    {
      id : 6,
      command : "Lock block",
      info : "L" 
    },
    {
      id : 7,
      command : "Break",
      info : "B + R" 
    },
    {
      id : 7,
      command : "Short Data types",
      info : "S + H" 
    },
    {
      id : 8,
      command : "True Data types",
      info : "T + R" 
    },
    {
      id : 9,
      command : "False Data types",
      info : "F" 
    },
    {
      id : 10,
      command : "Float Data types",
      info : "F + L" 
    },
    {
      id : 11,
      command : "Byte Data types",
      info : "B + Y" 
    },
    {
      id : 12,
      command : "Bool Data types",
      info : "B + O" 
    },
    {
      id : 13,
      command : "Enum myEnum Data types",
      info : "E" 
    },
    {
      id : 14,
      command : "A new public class block",
      info : "T" 
    },
    {
      id : 15,
      command : "Console.WriteLine",
      info : "C + W" 
    },
    {
      id : 16,
      command : "MessageBox.show",
      info : "M + B" 
    },
    {
      id : 17,
      command : "CrossAppDomainDelegate",
      info : "C + R" 
    },
    {
      id : 18,
      command : "AccessViolationException",
      info : "A + B" 
    },
    {
      id : 19,
      command : "Exception class",
      info : "E + X" 
    },
    {
      id : 20,
      command : "The static Void Main block",
      info : "S + V + M" 
    },
    {
      id : 21,
      command : "Parallel",
      info : "P + U" 
    },
    {
      id : 22,
      command : "Public Int Property",
      info : "P + R" 
    },
    {
      id : 23,
      command : "Stackalloc",
      info : "S" 
    }
  ]
  const Vs6 = [
    {
      id : 1,
      command : "Build solution",
      info : "F6" 
    },
    {
      id : 2,
      command : "Rebuild solution",
      info : "Ctrl + Alt + F7" 
    },
    {
      id : 3,
      command : "Show error list",
      info : "Ctrl + \\ + E" 
    },
    {
      id : 4,
      command : "Toggle breakpoint",
      info : "F9" 
    },
    {
      id : 5,
      command : "Insert new function breakpoint",
      info : "Ctrl + B" 
    },
    {
      id : 6,
      command : "Start debugging",
      info : "F5" 
    },
    {
      id : 7,
      command : "Debug – step into",
      info : "F11" 
    },
    {
      id : 8,
      command : "Debug – step over",
      info : "F10" 
    },
    {
      id : 9,
      command : "Debug – step out",
      info : "Shift + F11" 
    },
    {
      id : 10,
      command : "Debug – run to cursor",
      info : "Ctrl + F10" 
    },
    {
      id : 11,
      command : "Show Quickwatch window",
      info : "Ctrl + Alt + Q" 
    },
    {
      id : 12,
      command : "Set the current statement to be the next executed",
      info : "Ctrl + Shift + F10" 
    },
    {
      id : 13,
      command : "Show next statement",
      info : "Alt + *" 
    },
    {
      id : 14,
      command : "Show Exception dialogue box",
      info : "Ctrl + Alt + E" 
    },
    {
      id : 15,
      command : "Toggle between disassembly and user code view",
      info : "Ctrl + F11" 
    },
    {
      id : 16,
      command : "Stop Debugging",
      info : "Shift + F5" 
    },
    {
      id : 17,
      command : "Bypass debugger",
      info : "Ctrl + F5" 
    },
    {
      id : 18,
      command : "Show attach to process window",
      info : "Ctrl + Alt + P" 
    }
  ]
  const Vs7 = [
    {
      id : 1,
      command : "Open the code snippet manager window",
      info : "Ctrl + K + B" 
    },
    {
      id : 2,
      command : "Open macro IDE window",
      info : "Alt + F11" 
    },
    {
      id : 3,
      command : "Open bookmark window",
      info : "Ctrl + K + W" 
    },
    {
      id : 4,
      command : "Open call hierarchy window",
      info : "Ctrl + Alt + K" 
    },
    {
      id : 5,
      command : "Open class view window",
      info : "Ctrl + Shift + C" 
    },
    {
      id : 6,
      command : "Open Command window",
      info : "Ctrl + Alt + A" 
    },
    {
      id : 7,
      command : "Open Output window",
      info : "Ctrl + Shift + O" 
    },
    {
      id : 8,
      command : "Open the Resource view window",
      info : "Ctrl + Shift + E" 
    },
    {
      id : 9,
      command : "Open the Server Explorer window",
      info : "Ctrl + Alt + S" 
    },
    {
      id : 10,
      command : "Open the Solution Explorer window",
      info : "Ctrl + Shift + L" 
    },
    {
      id : 11,
      command : "Close Find & Replace Window",
      info : "Shift + Esc" 
    },
    {
      id : 12,
      command : "debugger",
      info : "Ctrl" 
    },
    {
      id : 13,
      command : "debugger",
      info : "Ctrl" 
    },
    {
      id : 14,
      command : "debugger",
      info : "Ctrl" 
    },
    {
      id : 15,
      command : "debugger",
      info : "Ctrl" 
    }
  ]
  const VsButton = [
    {
      id: 1,
      title: "Most Used",
      function: setVsData1
    },
    {
      id: 2,
      title: "Code Editor",
      function: setVsData2
    },
    {
      id: 3,
      title: "Coding",
      function: setVsData3
    },
    {
      id: 4,
      title: "Bookmarks",
      function: setVsData4
    },
    {
      id: 5,
      title: "Code Snippets",
      function: setVsData5
    },
    {
      id: 6,
      title: "Build and Debug",
      function: setVsData6
    },
    {
      id: 7,
      title: "Tool windows",
      function: setVsData7
    },
  ]

  /* VscodeData */
  const setVscodeData1 = () => {
    setData(Vscode1)
  }
  const setVscodeData2 = () => {
    setData(Vscode2)
  }
  const setVscodeData3 = () => {
    setData(Vscode3)
  }
  const setVscodeData4 = () => {
    setData(Vscode4)
  }
  const setVscodeData5 = () => {
    setData(Vscode5)
  }
  const setVscodeData6 = () => {
    setData(Vscode6)
  }
  const Vscode1 = [
    {
      id : 1,
      command : "Show Command Palette",
      info : "Ctrl+Shift+P, F1" 
    },
    {
      id : 2,
      command : "Quick Open, Go to File…",
      info : "Ctrl+P" 
    },
    {
      id : 3,
      command : "New window/instance",
      info : "Ctrl+Shift+N" 
    },
    {
      id : 4,
      command : "Close window/instance",
      info : "Ctrl+Shift+W" 
    },
    {
      id : 5,
      command : "User Settings",
      info : "Ctrl+," 
    },
    {
      id : 6,
      command : "Keyboard Shortcuts",
      info : "Ctrl+K Ctrl+S" 
    }
  ]
  const Vscode2 = [
    {
      id : 1,
      command : "Cut line (empty selection)",
      info : "Ctrl+X" 
    },
    {
      id : 2,
      command : "Copy line (empty selection)",
      info : "Ctrl+C" 
    },
    {
      id : 3,
      command : "Move line up/down",
      info : "Alt+ ↑ / ↓" 
    },
    {
      id : 4,
      command : "Copy line up/down",
      info : "Shift+Alt + ↓ / ↑" 
    },
    {
      id : 5,
      command : "Delete line",
      info : "Ctrl+Shift+K" 
    },
    {
      id : 6,
      command : "Insert line below",
      info : "Ctrl+Enter" 
    },
    {
      id : 7,
      command : "Insert line above",
      info : "Ctrl+Shift+Enter" 
    },
    {
      id : 8,
      command : "Jump to matching bracket",
      info : "Ctrl+Shift+(backslash)" 
    },
    {
      id : 9,
      command : "Indent/outdent lin",
      info : "Ctrl+] / [" 
    },
    {
      id : 10,
      command : "Go to beginning/end of line",
      info : "Home / End" 
    },
    {
      id : 11,
      command : "Go to beginning of file",
      info : "Ctrl+Home" 
    },
    {
      id : 12,
      command : "Go to end of file",
      info : "Ctrl+End" 
    },
    {
      id : 13,
      command : "Scroll line up/dow",
      info : "Ctrl+↑ / ↓" 
    },
    {
      id : 14,
      command : "Scroll page up/down",
      info : "Alt+PgUp / PgDn" 
    },
    {
      id : 15,
      command : "Fold (collapse) region",
      info : "Ctrl+Shift+[" 
    },
    {
      id : 16,
      command : "Unfold (uncollapse) region",
      info : "Ctrl+Shift+]" 
    },
    {
      id : 17,
      command : "Fold (collapse) all subregions",
      info : "Ctrl+K Ctrl+[" 
    },
    {
      id : 18,
      command : "Unfold (uncollapse) all subregions",
      info : "Ctrl+K Ctrl+" 
    },
    {
      id : 19,
      command : "Fold (collapse) all regions",
      info : "Ctrl+K Ctrl+0" 
    },
    {
      id : 20,
      command : "Unfold (uncollapse) all regions",
      info : "Ctrl+K Ctrl+J" 
    },
    {
      id : 21,
      command : "Add line comment",
      info : "Ctrl+K Ctrl+C" 
    },
    {
      id : 22,
      command : "Remove line comment",
      info : "Ctrl+K Ctrl+U" 
    },
    {
      id : 23,
      command : "Toggle line comment",
      info : "Ctrl+/" 
    },
    {
      id : 24,
      command : "Toggle block comment",
      info : "Shift+Alt+A" 
    },
    {
      id : 25,
      command : "Toggle word wrap",
      info : "Alt+Z" 
    }
  ]
  const Vscode3 = [
    {
      id : 1,
      command : "Show all Symbols",
      info : "Ctrl+T" 
    },
    {
      id : 2,
      command : "Go to Line...",
      info : "Ctrl+G" 
    },
    {
      id : 3,
      command : "Go to File...",
      info : "Ctrl+P" 
    },
    {
      id : 4,
      command : "Show Problems panel",
      info : "Ctrl+Shift+M" 
    },
    {
      id : 5,
      command : "Go to next error or warning",
      info : "F8" 
    },
    {
      id : 6,
      command : "Go to previous error or warning",
      info : "Shift+F8" 
    },
    {
      id : 7,
      command : "Navigate editor group history",
      info : "Ctrl+Shift+Tab" 
    },
    {
      id : 8,
      command : "Go back / forward",
      info : "Alt+ ← / →" 
    },
    {
      id : 9,
      command : "Go to Symbol...",
      info : "Ctrl+Shift+O" 
    }
  ]
  const Vscode4 = [
    {
      id : 1,
      command : "Find",
      info : "Ctrl+F" 
    },
    {
      id : 2,
      command : "Replace",
      info : "Ctrl+H" 
    },
    {
      id : 3,
      command : "Find next/previous",
      info : "F3 / Shift+F3" 
    },
    {
      id : 4,
      command : "Select all occurences of Find match",
      info : "Alt+Enter" 
    },
    {
      id : 5,
      command : "Add selection to next Find matc",
      info : "Ctrl+D" 
    },
    {
      id : 6,
      command : "Move last selection to next Find match",
      info : "Ctrl+K Ctrl+D" 
    },
    {
      id : 7,
      command : "Toggle case-sensitive / regex / whole word",
      info : "Alt+C / R / W" 
    }
  ]
  const Vscode5 = [
    {
      id : 1,
      command : "Insert cursor",
      info : "Alt+Click" 
    },
    {
      id : 2,
      command : "Insert cursor above / below",
      info : "Ctrl+Alt+ ↑ / ↓" 
    },
    {
      id : 3,
      command : "Undo last cursor operation",
      info : "Ctrl+U" 
    },
    {
      id : 4,
      command : "Insert cursor at end of each line selected",
      info : "Shift+Alt+I" 
    },
    {
      id : 5,
      command : "Select current line",
      info : "Ctrl+L" 
    },
    {
      id : 6,
      command : "Select all occurrences of current selection",
      info : "Ctrl+Shift+L" 
    },
    {
      id : 7,
      command : "Select all occurrences of current word",
      info : "Ctrl+F2" 
    },
    {
      id : 8,
      command : "Expand selection",
      info : "Shift+Alt+→" 
    },
    {
      id : 9,
      command : "Shrink selectio",
      info : "Shift+Alt+←" 
    },
    {
      id : 10,
      command : "Column (box) selection",
      info : "Shift+Alt +(drag mouse)" 
    },
    {
      id : 11,
      command : "Column (box) selection",
      info : "Ctrl+Shift+Alt + (arrow key)" 
    },
    {
      id : 12,
      command : "Column (box) selection page up/down",
      info : "Ctrl+Shift+Alt +PgUp/PgDn" 
    }
  ]
  const Vscode6 = [
    {
      id : 1,
      command : "Trigger suggestion",
      info : "Ctrl+Space, Ctrl+I" 
    },
    {
      id : 2,
      command : "Trigger parameter hints",
      info : "Ctrl+Shift+Space" 
    },
    {
      id : 3,
      command : "Format document",
      info : "Shift+Alt+F" 
    },
    {
      id : 4,
      command : "Format selection",
      info : "Ctrl+K Ctrl+F" 
    },
    {
      id : 5,
      command : "Go to Definition",
      info : "F12" 
    },
    {
      id : 6,
      command : "Peek Definition",
      info : "Alt+F12" 
    },
    {
      id : 7,
      command : "Open Definition to the side",
      info : "Ctrl+K F12" 
    },
    {
      id : 8,
      command : "Quick Fix",
      info : "Ctrl+." 
    },
    {
      id : 9,
      command : "Show References",
      info : "Shift+F12" 
    },
    {
      id : 10,
      command : "Rename Symbol",
      info : "F2" 
    },
    {
      id : 11,
      command : "Trim trailing whitespace",
      info : "Ctrl+K Ctrl+X" 
    },
    {
      id : 12,
      command : "Change file language",
      info : "Ctrl+K M" 
    }
  ]
  const VscodeButton = [
    {
      id: 1,
      title: "General",
      function: setVscodeData1
    },
    {
      id: 2,
      title: "Basic editing",
      function: setVscodeData2
    },
    {
      id: 3,
      title: "Navigator",
      function: setVscodeData3
    },
    {
      id: 4,
      title: "Search and replace",
      function: setVscodeData4
    },
    {
      id: 5,
      title: "Multi-cursor",
      function: setVscodeData5
    },
    {
      id: 6,
      title: "Languages editing",
      function: setVscodeData6
    }
  ]
  /* MainButtonsData */
  const MainButtons = [
  {
    id: 1,
    title: "apple",
    function: setApple,
    url: apple,
  },
  {
    id: 2,
    title: "windows",
    function: setWindows,
    url: window
  },
  {
    id: 3,
    title: "excel",
    function: setExcel,
    url: execl
  },
  {
    id: 4,
    title: "photoshop",
    function: setPhotoshop,
    url: photoshop
  },
  {
    id: 5,
    title: "chrome",
    function: setChrome,
    url: chrome
  },
  {
    id: 6,
    title: "word",
    function: setWord,
    url: word
  },
  {
    id: 7,
    title: "powerpoint",
    function: setPowerpoint,
    url: powerpoint
  },
  {
    id: 8,
    title: "vs",
    function: setVs,
    url: vs
  },
  {
    id: 9,
    title: "vs-code",
    function: setVscode,
    url: vscode
  }
  ]
  const Contoller = () => {
    setMain(!main)
  }

  return (
    <AppContext.Provider value={{Contoller, main, MainButtons, data, buttondata}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export default AppProvider