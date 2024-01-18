const handleAllFilesChange = () => {
    const allFilesCheckbox = document.getElementById("allfiles");
    const files = document.querySelectorAll("input[type='checkbox']:not(#allfiles)");

    const allFilesChecked = allFilesCheckbox.checked;
    console.log(allFilesChecked)

    files.forEach((checkbox) => {
        checkbox.checked = allFilesChecked;
    });
};

const handleFileChange = () => {
    const allFilesCheckbox = document.getElementById("allfiles");
    const files = document.querySelectorAll("input[type='checkbox']:not(#allfiles)");

    const allFilesChecked = Array.from(files).every((fileCheckbox) => fileCheckbox.checked);

    allFilesCheckbox.checked = allFilesChecked;
};


const handleChoosedFiles = (event) => {
    event.preventDefault();
    console.log("working");   

    const files = document.querySelectorAll("input[type='checkbox']:not(#allfiles)");
    console.log(files);

    const checkedFiles = [];

    files.forEach((checkbox) => {
        console.log(checkbox);
        const fileName = checkbox.name;
        console.log(fileName);
        const checkBoxStatus = checkbox.checked ? "checked" : "unchecked";
        console.log(checkBoxStatus);

        if (checkbox.checked) {
            checkedFiles.push(fileName);
        }
    });

    console.log("Checked files: ", checkedFiles);

    document.getElementById("listitems").innerHTML = checkedFiles
};
