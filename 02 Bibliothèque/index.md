```
dataview TABLE WITHOUT ID file.folder as "Folder", file.name as "Name"
WHERE contains(file.path, this.file.folder) 
AND file.name != this.file.name 
AND file.name != "Attachments" 
SORT Folder ASC 
```
