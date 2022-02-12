# LMU-Store-data.
Check the data balance of multiple accounts at the same time.
<!--  Funny names Go here-->

## Installing:
### Requirements:
* You need to have Node.js installed. [Install node.js](https://nodejs.org/en/download/)
* Run the command `npm i -g data-store`

## Usage:
`data-store [command] [options]`
## Commands:
### 1. **save** : Save usernames in the database  
**options** :  
* `-f` **or** `--file` <file path>

**Example Usage** :  
```
  $ data-store save
```
OR
```
  $ data-store save -f /Path/To/File
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
  $ data-store update
```
OR
```
  $ data-store update -f /Path/To/File
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
  $ data-store display
```
OR
```
  $ data-store display --has-data
```
OR
```
  $ data-store display --empty
```

## Help
For more info run:  
`data-store --help`  
OR  
`data-store [command] --help`
