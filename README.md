# LMU-Store-data.
Check the data balance of multiple accounts at the same time.
<!--  Funny names Go here-->
![](https://github.com/inth3wild/LMU-Store-data/blob/main/media/ezgif.com-gif-maker.gif)

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

### 2. **update** : Update data balances in the database  
**options** :  
* `-f` **or** `--file` <file path>

**Example Usage** :  
```
  $ balance-store update
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

## Help
For more info run:  
`balance-store --help`  
OR  
`balance-store [command] --help`
