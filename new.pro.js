function addfilm(){
    var titlef= document.getElementById("titlef").value
    var urlf = document.getElementById("urlf").value
    var description = document.getElementById("desc").value
    //var select = document.getElementById("select").value
    var insert = document.getElementById("insert")

    if(titlef=="" || urlf=="" || description==""){
    alert("enter please informations :")
}else{
    var divTag = `
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${urlf}" class="img-fluid rounded-start" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${titlef}</h5>
        <p class="card-text">${description}</p>
        <button type="button" class="btn btn-danger float-right mt-5" onclick="deleteFilm(this)">Delete</button>

      </div>
    </div>
  </div>`

  insert.innerHTML+=divTag
}
}

function deleteFilm(x){
  if(confirm("ARE YOU SURE ?"))
  x.parentElement.parentElement.parentElement.remove()
}








