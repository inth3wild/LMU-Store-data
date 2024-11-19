# LMU-Store-data.
Command-line interface program that helps students quickly check, manage and keep track of their internet quota.
<p align="left">
	<img src="https://img.shields.io/github/last-commit/inth3wild/LMU-Store-data?style=flat-square&logo=git&logoColor=white&color=0080ff" alt="last-commit">
</p>

<p align="left">Built with the following tools and technologies:</p>
<p align="left">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat-square&logo=Axios&logoColor=white" alt="Axios">
</p>

## Installing:
### Requirements:
* You need to have Node.js installed. [Install node.js](https://nodejs.org/en/download/)
* Run the command `npm i -g balance-store`

## Usage:
`balance-store [command] [options]`
## Commands:
### 1. **save** : Save usernames in the database  
**options** :  
* `-f` **or** `--file` <file path>

**Example Usage** :  
```
  $ balance-store save
```
OR
```
  $ balance-store save -f /Path/To/File
```
> **NB**: The file MUST contain the usernames and passwords in this format
```
  john.doe password1
  luxxxxx password2
```
![save-usage](https://github.com/inth3wild/LMU-Store-data/blob/main/media/save-edited.png)
---

### 2. **update** : Update data balances in the database  
**options** :  
* `-f` **or** `--file` <file path>
* `--auto`

**Example Usage** :  
```
  $ balance-store update
```
OR
```
  $ balance-store update --auto
```
OR
```
  $ balance-store update -f /Path/To/File
```
> **NB**: The file MUST contain the usernames and passwords in this format
```
  john.doe password1
  luxxxxx password2
```
![update-usage](https://github.com/inth3wild/LMU-Store-data/blob/main/media/update-edited.png)
---
  
  
### 3. **display** : Display the usernames and data balances  
**options** :  
* `--has-data`
* `--empty`
* `--invalid`

**Example Usage** :  
```
  $ balance-store display
```
OR
```
  $ balance-store display --has-data
```
OR
```
  $ balance-store display --empty
```
![display-usage](https://github.com/inth3wild/LMU-Store-data/blob/main/media/display-edited.png)
---

  
### 4. **remove** : Remove a username or set of usernames from the database  
**Example Usage** :  
```
  $ balance-store remove
```
![display-usage](https://github.com/inth3wild/LMU-Store-data/blob/main/media/remove-edited.png)
---

## Help
For more info run:  
`balance-store --help`  OR   `balance-store [command] --help`  

## Project Structure

```sh
└── LMU-Store-data/
    ├── README.md
    ├── commands
    │   ├── display.js
    │   ├── remove.js
    │   ├── save.js
    │   └── update.js
    ├── database
    │   └── db.js
    ├── index.js
    ├── media
    │   ├── display-edited.png
    │   ├── remove-edited.png
    │   ├── resources.txt
    │   ├── save-edited.png
    │   └── update-edited.png
    ├── modules
    │   ├── displayTable.js
    │   ├── encryptData.js
    │   ├── milk.js
    │   ├── sendRequests.js
    │   └── useRegex.js
    ├── package-lock.json
    └── package.json
```
