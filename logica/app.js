let API_BASE='https://rickandmortyapi.com/api/character'

let pegarDados=(url)=>{
    if (!url) {
      url=API_BASE
    }


    let xmlhttp=new XMLHttpRequest();
    xmlhttp.open('get',url,false )
    xmlhttp.send()
    let resp= JSON.parse(xmlhttp.responseText)

    //(resp.info.pages)
    document.getElementById('qtdPaginas').innerHTML=resp.info.pages


    resp.results.map((e)=>{
      let div=document.createElement('div')
      div.style.width=200+'px'
      div.style.heigth=200+'px'
      div.classList='itens'
      let img=document.createElement('img')
      img.src=e.image
      img.style.width=100+'%'
      img.id=e.id
      img.onclick=()=>{
        window.location.href='persongemInfo.html?id='+e.id
      }

      let info=document.createElement('div')
      info.innerHTML=e.name
      info.classList='nameItem'

      div.appendChild(img)
      div.appendChild(info)
      document.getElementById('areaPersonagens').appendChild(div)
      })

      // document.getElementById('numPaginas').onchange=()=>{
      //   let numpagina = document.getElementById('numPaginas').value
      //    document.getElementById('areaPersonagens').innerHTML=''
        
      //   pegarDados('https://rickandmortyapi.com/api/character/?page='+numpagina)
      // }

      // let numpagina = document.getElementById('numPaginas').value
      //   pegarDados('https://rickandmortyapi.com/api/character/?page='+numpagina)

      let prev=document.getElementById('prev')
      let numpagina=document.getElementById('numeroDePagina')
      prev.classList='btn btn-info'
      prev.onclick=()=>{
        document.getElementById('areaPersonagens').innerHTML=''
        pegarDados(resp.info.prev)
        //(resp.info.prev)
        if (numpagina.value!=1 &&numpagina.value<34) {
          numpagina.value=parseInt(numpagina.value)-1
        }else if(numpagina.value>34 || numpagina.value<1){
          alert('NUmero de página invalido')
        }
      }
      document.getElementById('navegacao').appendChild(prev)


      let next=document.getElementById('next')
      next.classList='btn btn-info'
      next.onclick=()=>{
        document.getElementById('areaPersonagens').innerHTML=''
        pegarDados(resp.info.next)
        if (numpagina.value<34) {
          numpagina.value=parseInt(numpagina.value)+1
        }
      }
      document.getElementById('navegacao').appendChild(next)
    }



let valor;

function filter(value) {
  //(value)
  let url='https://rickandmortyapi.com/api/character/?'
  if (value=='human'||value=='alien') {
    url+='species='+value
    //(url)
    document.getElementById('areaPersonagens').innerHTML=''
    pegarDados(url)
  }else if (value=='alive'||value=='dead'||value=='unknown') {
    url+='status='+value
    //(url)
    document.getElementById('areaPersonagens').innerHTML=''
    pegarDados(url)
  }
  else if (value=='male'||value=='female'|| value=='genderless' || value=='unknown') {
    url+='gender='+value
    //(url)
    document.getElementById('areaPersonagens').innerHTML=''
    pegarDados(url)
  }
    //(value)
}
