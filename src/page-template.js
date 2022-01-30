    const generateManager = manager => {
        return `
<div class="card col-md3" style="width: 18rem;">
<div class="card-body" >
<h5 class="card-title" style="color:black;">${manager.getRole()}</h5>
<h3 class="card-text" style="color:black;">${manager.getName()}</h3>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">${manager.getId()}</li>
<li class="list-group-item">${manager.getEmail()}</li>
<li class="list-group-item">${manager.getOffice()}</li>
</ul>
</div>`;
    };

    const generateIntern = intern => {
        return `
<div class="card col-md3" style="width: 18rem;">
<div class="card-body" >
<h5 class="card-title" style="color:black;">${intern.getRole()}</h5>
<h3 class="card-text" style="color:black;">${intern.getName()}</h3>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">${intern.getId()}</li>
<li class="list-group-item">${intern.getEmail()}</li>
<li class="list-group-item">${intern.getSchool()}</li>
</ul>
</div>`;
    }

    const generateEngineer = engineer => {
        return `
<div class="card col-md3" style="width: 18rem;">
<div class="card-body" >
<h5 class="card-title" style="color:black;">${engineer.getRole()}</h5>
<h3 class="card-text" style="color:black;">${engineer.getName()}</h3>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">${engineer.getId()}</li>
<li class="list-group-item">${engineer.getEmail()}</li>
<li class="list-group-item">https://github.com/${engineer.getGithub()}</li>
</ul>
</div>`;
    }


module.exports = {
    generateManager,
    generateIntern,
    generateEngineer
}