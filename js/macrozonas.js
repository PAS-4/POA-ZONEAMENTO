let parametro = document.querySelector('#parametro')
let quadrante = document.querySelector('#quadrante')
let quadra = document.querySelector('#quadra')
let classCheck = document.querySelector('.fa-check')
let classTimes = document.querySelector('.fa-times')
let erro = document.querySelector('#erro')
let mapa = document.querySelector('#mapa')
let aside = document.querySelector('aside')
let inscr = document.querySelector('#inscr')
let zoneamento = document.querySelector('#zoneamento')
let descr = document.querySelector('#descr')
let desd = document.querySelector('#desd')
let tOcup = document.querySelector('#tOcup')
let caBasico = document.querySelector('#caBasico')
let caMaximo = document.querySelector('#caMaximo')
let tPerm = document.querySelector('#tPerm')
let indices = document.querySelector('.indices')
let viab = document.querySelector('#viab')
let recuos = document.querySelector('.recuos')
let tipoConstruc = document.querySelector('#tipoConstruc')
let tipConstr = document.querySelector('#tipConstr')
let recFrontal = document.querySelector('#recFrontal')
let recLateral = document.querySelector('#recLateral')
let recFundos = document.querySelector('#recFundos')
let janPav = document.querySelector('.janPav')
let comEspecial = document.querySelector('#comEspecial')
let proibComEspecial = document.querySelector('#proibComEspecial')
let msgProibido = document.querySelector('#msgProibido')
let risco = document.querySelector('.risco')
let nivelRisco = document.querySelector('#nivelRisco')

function msgErro(){
    classCheck.style.display = 'none'
    classTimes.style.display = 'block'
    mapa.src = "image/mapa_tabela_zonaRural/mapaCompletoSmall.jpg"
    mapa.style.boxShadow = '0px 0px 10px #ff0000'
    erro.style.display = 'block'
    zoneamento.innerHTML = '#ERRO'
    zoneamento.style.backgroundColor = '#fff'
    descr.style.display = 'none'
    viab.style.display = 'none'
    indices.style.display = 'none'
    recuos.style.display = 'none'
}

function semMsgErro(){
    classCheck.style.display = 'block'
    classTimes.style.display = 'none'
    mapa.style.display = 'block'
    mapa.style.boxShadow = '0px 0px 10px #046DB5'
    erro.style.display = 'none'
    comEspecial.style.display = 'none'
    proibComEspecial.style.display = 'none'
    msgProibido.style.display = 'none'
    descr.style.display = 'block'
    viab.style.display = 'block'
    indices.style.display = 'block'
    recuos.style.display = 'block'
    risco.style.display = 'none'
    risco.style.backgroundImage = 'none'
}

function consultar(){
    semMsgErro()
    inscr.innerHTML = `Inscrição: <span class = "result">${parametro.value}.${quadrante.value}.${quadra.value}</span>`
    muc()
    zonaI()
    if(parametro.value === '43211'){
        switch(quadrante.value){
            case '23':
                switch(quadra.value){
                    case '02':
                    case '81':
                    case '92':
                    case '94':
                        mapa.src = "image/43211/43211.xx/43211.23.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '24':
                switch(quadra.value){
                    case '53':
                    case '61':
                    case '63':
                    case '71':
                    case '80':
                    case '82':
                    case '83':
                    case '90':
                    case '99':
                        mapa.src = "image/43211/43211.xx/43211.24.jpg"
                        break
                    case '33':
                        zeia1()
                        mapa.src = "image/43211/43211.xx/43211.24.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '33':
                switch(quadra.value){
                    case '27':
                    case '54':
                    case '74':
                    case '95':
                        mapa.src = "image/43211/43211.xx/43211.33.jpg"
                        break
                    case '24':
                        zeis1()
                        mapa.src = "image/43211/43211.xx/43211.33.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '34':
                switch(quadra.value){
                    case '35':
                        riscoBaixo(nivelRisco.innerHTML = 'NÍVEL BAIXO A2/S1/R1')
                        mapa.src = "image/43211/43211.xx/43211.34.jpg"
                        break
                    case '75':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A2/S2/R2')
                        mapa.src = "image/43211/43211.xx/43211.34.jpg"
                        break
                    case '04':
                    case '61':
                    case '73':
                    case '74':
                    case '82':
                        mapa.src = "image/43211/43211.xx/43211.34.jpg"
                        break
                    case '02':
                        zeis1()
                        mapa.src = "image/43211/43211.xx/43211.34.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '42':
                switch(quadra.value){
                    case '75':
                    case '80':
                    case '81':
                    case '84':
                    case '92':
                    case '95':
                    case '96':
                        mapa.src = "image/43211/43211.xx/43211.42.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '44':
                switch(quadra.value){
                    case '41':
                    case '61':
                    case '72':
                    case '73':
                    case '76':
                    case '89':
                        mapa.src = "image/43211/43211.xx/43211.44.jpg"
                        break
                    case '96':
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.44.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '51':
                switch(quadra.value){
                    case '85':
                        riscoAlto(nivelRisco.innerHTML = 'NÍVEL ALTO A3/S1/R3')
                        mapa.src = "image/43211/43211.xx/43211.51.jpg"
                        break
                    case '03':
                    case '07':
                    case '08':
                    case '14':
                    case '15':
                    case '20':
                    case '21':
                    case '25':
                    case '28':
                    case '32':
                    case '36':
                    case '43':
                    case '44':
                    case '50':
                    case '55':
                    case '61':
                    case '72':
                    case '97':
                        mapa.src = "image/43211/43211.xx/43211.51.jpg"
                        break
                    case '10':
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.51.jpg"
                        break
                    case '82':
                    case '85':
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.51.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '52':
                switch(quadra.value){
                    case '06':
                    case '08':
                    case '15':
                    case '29':
                    case '36':
                    case '67':
                    case '78':
                    case '79':
                    case '86':
                    case '87':
                    case '98':
                        mapa.src = "image/43211/43211.xx/43211.52.jpg"
                        break
                    case '22':
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.52.jpg"
                        break
                    case '31':
                    case '50':
                        zonaIIb()
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.52.jpg"
                        break
                    case '34':
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.52.jpg"
                        break
                    case '54':
                    case '73':
                    case '82':
                    case '85':
                        zonaIIb()
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.52.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '53':
                switch(quadra.value){
                    case '48':
                    case '59':
                        mapa.src = "image/43211/43211.xx/43211.53.jpg"
                        break
                    case '05':
                    case '13':
                    case '18':
                    case '20':
                    case '45':
                    case '52':
                    case '55':
                    case '62':
                    case '63':
                    case '71':
                    case '75':
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.53.jpg"
                        break
                    case '67':
                    case '78':
                    case '79':
                    case '80':
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.53.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '54':
                switch(quadra.value){
                    case '06':
                    case '33':
                    case '51':
                    case '54':
                    case '93':
                        zeia1()
                        mapa.src = "image/43211/43211.xx/43211.54.jpg"
                        break
                    case '02':
                    case '09':
                    case '11':
                    case '31':
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.54.jpg"
                        break
                    case '29':
                    case '48':
                    case '57':
                    case '70':
                    case '76':
                    case '95':
                    case '99':
                        zonaIIb()
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.54.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '61':
                switch(quadra.value){
                    case '08':
                    case '17':
                    case '18':
                    case '19':
                    case '28':
                    case '39':
                    case '78':
                        mapa.src = "image/43211/43211.xx/43211.61.jpg"
                        break
                    case '01':
                        zonaIIb()
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.61.jpg"
                        break
                    case '05':
                    case '24':
                        zonaIIb()
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.61.jpg"
                        break
                    case '20':
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.61.jpg"
                        break
                    case '72':
                    case '83':
                    case '85':
                    case '86':
                    case '93':
                    case '96':
                        zonaIIc()
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.61.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '62':
                switch(quadra.value){
                    case '48':
                    case '56':
                        mapa.src = "image/43211/43211.xx/43211.62.jpg"
                        break
                    case '76':
                    case '83':
                        zonaIIa()
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.62.jpg"
                        break
                    case '80':
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.62.jpg"
                        break
                    case '10':
                    case '12':
                    case '16':
                    case '22':
                    case '25':
                    case '33':
                    case '40':
                    case '43':
                        zonaIIc()
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.62.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '63':
                switch(quadra.value){
                    case '02':
                    case '12':
                        zeia1()
                        mapa.src = "image/43211/43211.xx/43211.63.jpg"
                        break
                    case '08':
                        zonaIIb()
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.63.jpg"
                        break
                    case '40':
                    case '60':
                    case '80':
                        zeia2()
                        mapa.src = "image/43211/43211.xx/43211.63.jpg"
                        break
                    case '04':
                    case '16':
                    case '63':
                    case '68':
                    case '83':
                    case '94':
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.63.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '64':
                switch(quadra.value){
                    case '09':
                    case '29':
                    case '49':
                        zonaIIc()
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.64.jpg"
                        break
                    case '11':
                    case '13':
                    case '17':
                    case '26':
                    case '33':
                    case '50':
                    case '56':
                    case '63':
                    case '79':
                    case '80':
                    case '93':
                    case '96':
                        zeia3()
                        mapa.src = "image/43211/43211.xx/43211.64.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            default:
                msgErro()
        }
    } else if(parametro.value === '43212'){
        switch(quadrante.value){
            case '13':
                switch(quadra.value){
                    case '03':
                    case '10':
                    case '36':
                    case '62':
                    case '76':
                    case '83':
                    case '90':
                        mapa.src = "image/43212/43212.xx/43212.13.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '14':
                switch(quadra.value){
                    case '04':
                    case '36':
                        riscoBaixo(nivelRisco.innerHTML = 'NÍVEL BAIXO A1/S1/R1')
                        mapa.src = "image/43212/43212.xx/43212.14.jpg"
                        break
                    case '12':
                    case '26':
                    case '31':
                    case '33':
                    case '46':
                    case '50':
                    case '54':
                    case '56':
                    case '70':
                    case '73':
                    case '74':
                    case '75':
                        mapa.src = "image/43212/43212.xx/43212.14.jpg"
                        break
                    case '67':
                        zeia4()
                        mapa.src = "image/43212/43212.xx/43212.14.jpg"
                        break
                    case '87':
                        zonaIIIa()
                        zeia4()
                        mapa.src = "image/43212/43212.xx/43212.14.jpg"
                        break
                    case '95':
                    case '96':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43212/43212.xx/43212.14.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '23':
                switch(quadra.value){
                    case '01':
                    case '03':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43212/43212.xx/43212.23.jpg"
                        break
                    case '37':
                    case '45':
                        zonaIIIa()
                        zeia4()
                        mapa.src = "image/43212/43212.xx/43212.23.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '24':
                zeia1()
                mapa.src = "image/43212/43212.xx/43212.24.jpg"
                break
            case '41':
                switch(quadra.value){
                    case '16':
                    case '26':
                    case '27':
                    case '35':
                    case '38':
                    case '40':
                    case '42':
                    case '44':
                    case '45':
                    case '55':
                    case '57':
                    case '58':
                    case '63':
                    case '65':
                    case '75':
                    case '79':
                    case '80':
                    case '81':
                    case '86':
                    case '91':
                    case '94':
                        mapa.src = "image/43212/43212.xx/43212.41.jpg"
                        break
                    case '62':
                        zeic()
                        mapa.src = "image/43212/43212.xx/43212.41.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '42':
                switch(quadra.value){
                    case '00':
                    case '06':
                    case '09':
                    case '14':
                    case '20':
                    case '22':
                    case '23':
                    case '24':
                    case '28':
                    case '30':
                    case '31':
                    case '36':
                    case '43':
                    case '47':
                    case '52':
                    case '61':
                    case '67':
                    case '77':
                    case '79':
                        mapa.src = "image/43212/43212.xx/43212.42.jpg"
                        break
                    case '70':
                        zeii_IIIa()
                        mapa.src = "image/43212/43212.xx/43212.42.jpg"
                        break
                    case '74':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43212/43212.xx/43212.42.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '43':
                switch(quadra.value){
                    case '65':
                    case '67':
                    case '87':
                    case '89':
                    case '95':
                        mapa.src = "image/43212/43212.xx/43212.43.jpg"
                        break
                    case '29':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A4/S1/R2')
                        mapa.src = "image/43212/43212.xx/43212.43.jpg"
                        break
                    case '03':
                        zeia3()
                        mapa.src = "image/43212/43212.xx/43212.43.jpg"
                        break
                    case '35':
                    case '36':
                    case '47':
                    case '49':
                    case '55':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A4/S1/R2')
                        zeic()
                        mapa.src = "image/43212/43212.xx/43212.43.jpg"
                        break
                    case '72':
                    case '82':
                    case '90':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A5/S1/R2')
                        zeic()
                        mapa.src = "image/43212/43212.xx/43212.43.jpg"
                        break
                    case '00':
                    case '21':
                    case '22':
                    case '33':
                    case '40':
                    case '42':
                    case '44':
                    case '61':
                    case '73':
                    case '84':
                        zeic()
                        mapa.src = "image/43212/43212.xx/43212.43.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '44':
                switch(quadra.value){
                    case '00':
                    case '14':
                    case '16':
                    case '18':
                    case '19':
                    case '21':
                    case '25':
                    case '38':
                    case '47':
                    case '49':
                    case '68':
                        mapa.src = "image/43212/43212.xx/43212.44.jpg"
                        break
                    case '04':
                        zeic()
                        mapa.src = "image/43212/43212.xx/43212.44.jpg"
                        break
                    case '24':
                    case '56':
                    case '61':
                    case '87':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43212/43212.xx/43212.44.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '51':
                switch(quadra.value){
                    case '05':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43212/43212.xx/43212.51.jpg"
                        break
                    case '56':
                        zonaIIIa()
                        zeia4()
                        mapa.src = "image/43212/43212.xx/43212.51.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '52':
                zonaIIIa()
                zeia4()
                mapa.src = "image/43212/43212.xx/43212.52.jpg"
                break
            case '53':
                switch(quadra.value){
                    case '03':
                    case '12':
                    case '21':
                    case '34':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43212/43212.xx/43212.53.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '54':
                zonaIIIa()
                zeia4()
                mapa.src = "image/43212/43212.xx/43212.54.jpg"
                break
            default:
                msgErro()
        }
    } else if(parametro.value === '43213'){
        switch(quadrante.value){
            case '12':
                switch(quadra.value){
                    case '69':
                        mapa.src = "image/43213/43213.xx/43213.12.jpg"
                        break
                    case '36':
                    case '46':
                    case '56':
                    case '64':
                    case '66':
                    case '86':
                    case '96':
                        zeia3()
                        mapa.src = "image/43213/43213.xx/43213.12.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '14':
                switch(quadra.value){
                    case '78':
                    case '89':
                    case '98':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.14.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '21':
                switch(quadra.value){
                    case '02':
                        zeia1()
                        mapa.src = "image/43213/43213.xx/43213.21.jpg"
                        break
                    case '01':
                    case '04':
                    case '05':
                    case '21':
                    case '23':
                    case '33':
                    case '56':
                    case '59':
                    case '66':
                    case '68':
                    case '87':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.21.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '22':
                switch(quadra.value){
                    case '11':
                    case '53':
                        zeia1()
                        mapa.src = "image/43213/43213.xx/43213.22.jpg"
                        break
                    case '08':
                    case '37':
                    case '88':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.22.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '23':
                switch(quadra.value){
                    case '07':
                    case '09':
                    case '17':
                    case '18':
                    case '19':
                    case '27':
                    case '29':
                    case '48':
                    case '66':
                    case '79':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.23.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '24':
                switch(quadra.value){
                    case '14':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A8/S2/R4')
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.24.jpg"
                        break
                    case '36':
                    case '39':
                    case '47':
                    case '75':
                    case '77':
                    case '97':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.24.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '31':
                switch(quadra.value){
                    case '90':
                        riscoBaixo(nivelRisco.innerHTML = 'NÍVEL BAIXO A6/S4/R1')
                        mapa.src = "image/43213/43213.xx/43213.31.jpg"
                        break
                    case '72':
                    case '73':
                    case '76':
                    case '94':
                        mapa.src = "image/43213/43213.xx/43213.31.jpg"
                        break
                    case '08':
                    case '17':
                        zeia1()
                        mapa.src = "image/43213/43213.xx/43213.31.jpg"
                        break
                    case '41':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A6/S3/R2')
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.31.jpg"
                        break
                    case '15':
                    case '21':
                    case '22':
                    case '23':
                    case '24':
                    case '36':
                    case '46':
                    case '48':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.31.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '32':
                switch(quadra.value){
                    case '66':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A19/S1/R2 // NÍVEL ALTO A19/S2/R3 e A19/S2/R3', riscoMedio(risco.style.backgroundImage = 'linear-gradient(90deg, #ffff00, #ff0000)'))
                        mapa.src = "image/43213/43213.xx/43213.32.jpg"
                        break
                    case '03':
                    case '16':
                    case '25':
                    case '33':
                    case '34':
                    case '47':
                    case '53':
                    case '73':
                        mapa.src = "image/43213/43213.xx/43213.32.jpg"
                        break
                    case '19':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.32.jpg"
                        break
                    case '70':
                    case '81':
                    case '92':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A8/S2/R4')
                        zeic()
                        mapa.src = "image/43213/43213.xx/43213.32.jpg"
                        break
                    case '40':
                    case '61':
                    case '86':
                    case '94':
                    case '97':
                        zeic()
                        mapa.src = "image/43213/43213.xx/43213.32.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '33':
                switch(quadra.value){
                    case '22':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A8/S1/R2 // NÍVEL MUITO ALTO A8/S2/R4', riscoMedio(risco.style.backgroundImage = 'linear-gradient(90deg, #ffff00, #dd00dd)'))
                        mapa.src = "image/43213/43213.xx/43213.33.jpg"
                        break
                    case '51':
                    case '67':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A8/S2/R4')
                        mapa.src = "image/43213/43213.xx/43213.33.jpg"
                        break
                    case '14':
                    case '55':
                    case '66':
                    case '70':
                    case '85':
                    case '88':
                    case '91':
                    case '97':
                        mapa.src = "image/43213/43213.xx/43213.33.jpg"
                        break
                    case '29':
                        riscoAlto(nivelRisco.innerHTML = 'NÍVEL ALTO A6/S2/R3')
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.33.jpg"
                        break
                    case '17':
                    case '26':
                    case '36':
                        zeia2()
                        mapa.src = "image/43213/43213.xx/43213.33.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '34':
                switch(quadra.value){
                    case '03':
                    case '23':
                    case '33':
                        riscoAlto(nivelRisco.innerHTML = 'NÍVEL ALTO A7/S1/R3')
                        mapa.src = "image/43213/43213.xx/43213.34.jpg"
                        break
                    case '07':
                    case '14':
                    case '26':
                    case '34':
                    case '35':
                    case '36':
                    case '55':
                    case '71':
                        mapa.src = "image/43213/43213.xx/43213.34.jpg"
                        break
                    case '42':
                    case '67':
                    case '89':
                    case '93':
                    case '99':
                        zeic()
                        mapa.src = "image/43213/43213.xx/43213.34.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '52':
                switch(quadra.value){
                    case '74':
                    case '76':
                    case '87':
                    case '91':
                    case '97':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A8/S2/R4')
                        mapa.src = "image/43213/43213.xx/43213.52.jpg"
                        break
                    case '84':
                    case '93':
                    case '95':
                        mapa.src = "image/43213/43213.xx/43213.52.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '61':
                switch(quadra.value){
                    case '01':
                    case '04':
                    case '06':
                    case '11':
                    case '13':
                    case '14':
                    case '16':
                    case '19':
                    case '21':
                    case '31':
                    case '33':
                    case '37':
                    case '42':
                    case '44':
                    case '55':
                    case '57':
                    case '59':
                    case '62':
                    case '63':
                    case '65':
                    case '68':
                    case '76':
                    case '78':
                    case '81':
                    case '86':
                    case '89':
                    case '93':
                        mapa.src = "image/43213/43213.xx/43213.61.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '62':
                switch(quadra.value){
                    case '00':
                    case '04':
                    case '07':
                    case '09':
                    case '14':
                    case '15':
                    case '16':
                    case '24':
                    case '29':
                    case '31':
                    case '35':
                    case '48':
                    case '49':
                    case '54':
                    case '71':
                    case '79':
                    case '81':
                    case '85':
                    case '90':
                    case '91':
                        mapa.src = "image/43213/43213.xx/43213.62.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '63':
                switch(quadra.value){
                    case '08':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A8/S2/R4')
                        mapa.src = "image/43213/43213.xx/43213.63.jpg"
                        break
                    case '03':
                    case '04':
                    case '05':
                    case '06':
                    case '14':
                    case '18':
                    case '28':
                    case '38':
                    case '67':
                    case '78':
                    case '79':
                    case '88':
                    case '95':
                        mapa.src = "image/43213/43213.xx/43213.63.jpg"
                        break
                    case '54':
                        zeis1()
                        mapa.src = "image/43213/43213.xx/43213.63.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '64':
                switch(quadra.value){
                    case '37':
                    case '48':
                    case '49':
                    case '75':
                    case '77':
                    case '78':
                    case '79':
                    case '84':
                    case '89':
                    case '92':
                        mapa.src = "image/43213/43213.xx/43213.64.jpg"
                        break
                    case '80':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A10/S1/R2')
                        mapa.src = "image/43213/43213.xx/43213.64.80.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            default:
                msgErro()
        }
    } else if(parametro.value === '43214'){
        switch(quadrante.value){
            case '11':
                switch(quadra.value){
                    case '30':
                    case '51':
                    case '72':
                    case '73':
                    case '81':
                    case '88':
                    case '94':
                    case '96':
                    case '97':
                        mapa.src = "image/43214/43214.xx/43214.11.jpg"
                        break
                    case '69':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A5/S1/R2')
                        zeic()
                        mapa.src = "image/43214/43214.xx/43214.11.jpg"
                        break
                    case '02':
                    case '03':
                    case '13':
                    case '15':
                    case '25':
                    case '34':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A8/S2/R4')
                        zeic()
                        mapa.src = "image/43214/43214.xx/43214.11.jpg"
                        break
                    case '00':
                    case '06':
                    case '10':
                    case '21':
                    case '36':
                    case '38':
                    case '42':
                    case '47':
                    case '55':
                    case '66':
                    case '77':
                        zeic()
                        mapa.src = "image/43214/43214.xx/43214.11.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '12':
                switch(quadra.value){
                    case '03':
                    case '06':
                    case '07':
                    case '08':
                    case '09':
                    case '18':
                    case '27':
                    case '32':
                    case '37':
                    case '39':
                    case '48':
                    case '54':
                    case '56':
                    case '60':
                    case '61':
                    case '91':
                        mapa.src = "image/43214/43214.xx/43214.12.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '13':
                switch(quadra.value){
                    case '14':
                    case '16':
                    case '18':
                    case '27':
                    case '29':
                    case '33':
                    case '36':
                    case '38':
                    case '45':
                    case '50':
                    case '53':
                    case '56':
                    case '59':
                    case '73':
                    case '77':
                    case '81':
                    case '95':
                        mapa.src = "image/43214/43214.xx/43214.13.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '14':
                switch(quadra.value){
                    case '02':
                    case '09':
                    case '14':
                    case '16':
                    case '17':
                    case '20':
                    case '21':
                    case '22':
                    case '29':
                    case '33':
                    case '34':
                    case '45':
                    case '47':
                    case '50':
                    case '51':
                    case '58':
                    case '62':
                    case '63':
                    case '64':
                    case '70':
                    case '71':
                    case '76':
                    case '88':
                    case '89':
                    case '90':
                    case '91':
                    case '92':
                    case '93':
                        mapa.src = "image/43214/43214.xx/43214.14.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '21':
                switch(quadra.value){
                    case '09':
                    case '46':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43214/43214.xx/43214.21.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '22':
                zeia1()
                mapa.src = "image/43214/43214.xx/43214.22.jpg"
                break
            case '23':
                switch(quadra.value){
                    case '30':
                        mapa.src = "image/43214/43214.xx/43214.23.jpg"
                        break
                    case '45':
                        zonaIIIa()
                        zeii_IIIa()
                        mapa.src = "image/43214/43214.xx/43214.23.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '41':
                switch(quadra.value){
                    case '08':
                    case '23':
                    case '26':
                    case '34':
                    case '47':
                    case '50':
                    case '63':
                    case '73':
                    case '78':
                    case '81':
                    case '84':
                    case '99':
                        mapa.src = "image/43214/43214.xx/43214.41.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '42':
                switch(quadra.value){
                    case '08':
                    case '15':
                    case '17':
                    case '18':
                    case '19':
                    case '25':
                    case '26':
                    case '35':
                    case '37':
                    case '48':
                    case '49':
                    case '55':
                    case '57':
                    case '65':
                    case '67':
                    case '68':
                    case '69':
                    case '75':
                    case '87':
                    case '88':
                    case '89':
                    case '95':
                        mapa.src = "image/43214/43214.xx/43214.42.jpg"
                        break
                    case '01':
                    case '03':
                    case '33':
                    case '93':
                        zonaIIIb()
                        zeii_IIIb()
                        mapa.src = "image/43214/43214.xx/43214.42.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '43':
                switch(quadra.value){
                    case '05':
                    case '09':
                    case '13':
                    case '24':
                    case '48':
                    case '54':
                    case '76':
                        mapa.src = "image/43214/43214.xx/43214.43.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '44':
                switch(quadra.value){
                    case '58':
                        zonaIIIb()
                        zeii_IIIb()
                        mapa.src = "image/43214/43214.xx/43214.44.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '51':
                switch(quadra.value){
                    case '35':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A9/S1/R2')
                        mapa.src = "image/43214/43214.xx/43214.51.jpg"
                        break
                    case '03':
                    case '17':
                    case '18':
                    case '19':
                    case '25':
                    case '38':
                        mapa.src = "image/43214/43214.xx/43214.51.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '53':
                zonaIIIb()
                zeii_IIIb()
                mapa.src = "image/43214/43214.xx/43214.53.jpg"
                break
            default:
                msgErro()
        }
    } else if(parametro.value === '43231'){
        switch(quadrante.value){
            case '22':
                switch(quadra.value){
                    case '83':
                    case '90':
                    case '92':
                        mapa.src = "image/43231/43231.xx/43231.22.jpg"
                        break
                    case '02':
                    case '94':
                        mapa.src = "image/43231/43231.xx/43231.22-02ou94.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '24':
                switch(quadra.value){
                    case '85':
                        riscoAlto(nivelRisco.innerHTML = 'NÍVEL ALTO A18/S4/R3 // NÍVEL MUITO ALTO A18/S6/R4 e A18/S7/R4', risco.style.backgroundImage = 'linear-gradient(90deg, #ff0000, #dd00dd)')
                        mapa.src = "image/43231/43231.xx/43231.24.jpg"
                        break
                    case '68':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A18/S1/R4')
                        mapa.src = "image/43231/43231.xx/43231.24.jpg"
                        break
                    case '77':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A18/S3/R4')
                        mapa.src = "image/43231/43231.xx/43231.24.jpg"
                        break
                    case '89':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A18/S2/R4')
                        mapa.src = "image/43231/43231.xx/43231.24.jpg"
                        break
                    case '76':
                    case '80':
                    case '98':
                        mapa.src = "image/43231/43231.xx/43231.24.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '31':
                switch(quadra.value){
                    case '65':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A17/S2/R4')
                        mapa.src = "image/43231/43231.xx/43231.31.jpg"
                        break
                    case '31':
                    case '32':
                    case '38':
                    case '43':
                    case '54':
                    case '68':
                    case '83':
                    case '84':
                    case '95':
                        mapa.src = "image/43231/43231.xx/43231.31.jpg"
                        break
                    case '77':
                        zeia2()
                        mapa.src = "image/43231/43231.xx/43231.31.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '32':
                switch(quadra.value){
                    case '04':
                        riscoAlto(nivelRisco.innerHTML = 'NÍVEL ALTO A17/S1/R3')
                        mapa.src = "image/43231/43231.xx/43231.32.jpg"
                        break
                    case '05':
                    case '84':
                    case '87':
                    case '95':
                    case '96':
                        mapa.src = "image/43231/43231.xx/43231.32.jpg"
                        break
                    case '35':
                        zeia2()
                        mapa.src = "image/43231/43231.xx/43231.32.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '33':
                switch(quadra.value){
                    case '05':
                        riscoAlto(nivelRisco.innerHTML = 'NÍVEL ALTO A18/S4/R3 // NÍVEL MUITO ALTO A18/S5/R4', risco.style.backgroundImage = 'linear-gradient(90deg, #ff0000, #dd00dd)')
                        mapa.src = "image/43231/43231.xx/43231.33.jpg"
                        break
                    case '92':
                        riscoAlto(nivelRisco.innerHTML = 'NÍVEL ALTO A18/S8/R3')
                        mapa.src = "image/43231/43231.xx/43231.33.jpg"
                        break
                    case '00':
                    case '03':
                    case '04':
                    case '06':
                    case '08':
                    case '10':
                    case '19':
                    case '21':
                    case '23':
                    case '25':
                    case '32':
                    case '37':
                    case '38':
                    case '39':
                    case '42':
                    case '45':
                    case '53':
                    case '67':
                    case '68':
                    case '75':
                        mapa.src = "image/43231/43231.xx/43231.33.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '34':
                switch(quadra.value){
                    case '32':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A14/S3/R4')
                        mapa.src = "image/43231/43231.xx/43231.34.jpg"
                        break
                    case '41':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A14/S4/R4')
                        mapa.src = "image/43231/43231.xx/43231.34.jpg"
                        break
                    case '36':
                    case '46':
                    case '54':
                    case '56':
                    case '64':
                    case '66':
                    case '67':
                    case '75':
                    case '79':
                    case '82':
                    case '91':
                        mapa.src = "image/43231/43231.xx/43231.34.jpg"
                        break
                    case '57':
                    case '69':
                        zeia2()
                        mapa.src = "image/43231/43231.xx/43231.34.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '52':
                switch(quadra.value){
                    case '97':
                        mapa.src = "image/43231/43231.xx/43231.52.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '54':
                zeia3()
                mapa.src = "image/43231/43231.xx/43231.54.jpg"
                break
            case '61':
                switch(quadra.value){
                    case '71':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A15/S1/R2')
                        mapa.src = "image/43231/43231.xx/43231.61.jpg"
                        break
                    case '18':
                    case '39':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A18/S9/R4')
                        mapa.src = "image/43231/43231.xx/43231.61.jpg"
                        break
                    case '38':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A18/S10/R4')
                        mapa.src = "image/43231/43231.xx/43231.61.jpg"
                        break
                    case '08':
                    case '82':
                    case '94':
                        mapa.src = "image/43231/43231.xx/43231.61.jpg"
                        break
                    case '91':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A15/S1/R2')
                        mapa.src = "image/43231/43231.xx/43231.61.91.jpg"
                        break
                    case '50':
                    case '97':
                        zeis3()
                        mapa.src = "image/43231/43231.xx/43231.61.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '62':
                switch(quadra.value){
                    case '26':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A14/S1/R2')
                        mapa.src = "image/43231/43231.xx/43231.62.jpg"
                        break
                    case '07':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A14/S2/R4')
                        mapa.src = "image/43231/43231.xx/43231.62.jpg"
                        break
                    case '03':
                    case '12':
                    case '15':
                    case '22':
                    case '24':
                    case '31':
                    case '34':
                    case '36':
                    case '40':
                    case '43':
                    case '50':
                    case '52':
                    case '58':
                    case '62':
                    case '71':
                    case '74':
                    case '81':
                    case '84':
                    case '86':
                    case '93':
                    case '96':
                        mapa.src = "image/43231/43231.xx/43231.62.jpg"
                        break
                    case '19':
                        mapa.src = "image/43231/43231.xx/43231.62.19.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '63':
                zeia3()
                mapa.src = "image/43231/43231.xx/43231.63.jpg"
                break
            case '64':
                switch(quadra.value){
                    case '39':
                    case '48':
                    case '69':
                    case '79':
                        mapa.src = "image/43231/43231.xx/43231.64.jpg"
                        break
                    case '19':
                        mapa.src = "image/43231/43231.xx/43231.62e64.jpg"
                        break
                    case '27':
                    case '66':
                        zeia3()
                        mapa.src = "image/43231/43231.xx/43231.64.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            default:
                msgErro()
        }
    } else if(parametro.value === '43232'){
        switch(quadrante.value){
            case '11':
                switch(quadra.value){
                    case '21':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A12/S1/R4')
                        mapa.src = "image/43232/43232.xx/43232.11.jpg"
                        break
                    case '74':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A11/S1/R4')
                        mapa.src = "image/43232/43232.xx/43232.11.jpg"
                        break
                    case '03':
                    case '06':
                    case '09':
                    case '18':
                    case '23':
                    case '27':
                    case '36':
                    case '47':
                    case '56':
                    case '59':
                    case '66':
                        mapa.src = "image/43232/43232.xx/43232.11.jpg"
                        break
                    case '94':
                        zeia1()
                        mapa.src = "image/43232/43232.xx/43232.11.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '12':
                mapa.src = "image/43232/43232.xx/43232.12.jpg"
                break
            case '13':
                switch(quadra.value){
                    case '25':
                        riscoMedio(nivelRisco.innerHTML = 'NÍVEL MÉDIO A13/S1/R2')
                        mapa.src = "image/43232/43232.xx/43232.13.jpg"
                        break
                    case '08':
                    case '10':
                    case '13':
                    case '16':
                    case '20':
                    case '23':
                        mapa.src = "image/43232/43232.xx/43232.13.jpg"
                        break
                    case '44':
                        zeia1()
                        mapa.src = "image/43232/43232.xx/43232.13.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '41':
                switch(quadra.value){
                    case '03':
                    case '14':
                        riscoMuitoAlto(nivelRisco.innerHTML = 'NÍVEL MUITO ALTO A16/S1/R4')
                        mapa.src = "image/43232/43232.xx/43232.41.jpg"
                        break
                    case '02':
                    case '05':
                    case '08':
                    case '09':
                    case '17':
                    case '29':
                        mapa.src = "image/43232/43232.xx/43232.41.jpg"
                        break
                    case '22':
                        zeia1()
                        mapa.src = "image/43232/43232.xx/43232.41.jpg"
                        break
                    case '90':
                        zeis3()
                        mapa.src = "image/43232/43232.xx/43232.41.jpg"
                        break
                    default:
                        msgErro()
                }
                break
            case '43':
                zeia1()
                mapa.src = "image/43232/43232.xx/43232.43.jpg"
                break
            default:
                msgErro()
        }
    }
}

//MUC
function muc(){
    zoneamento.style.backgroundColor = '#fff'
    zoneamento.innerHTML = 'MACROZONA URBANA CONSOLIDADA'
    descr.innerHTML = 'MUC - Compreende todo o território municipal, excetuando-se aquelas porções que compôem as outras Macrozonas delimidatas pelas leis nº 3.201/06 e nº 3.219/07.'
    desd.innerHTML = `Desdobro mínimo permitido: <span class = "result">125m²</span>`
    tOcup.innerHTML = `Taxa de Ocupação: <span class = "result">75%</span>`
    caBasico.innerHTML = `Coeficiente de aproveitamento BÁSICO: <span class = "result">1,4</span>`
    caMaximo.innerHTML = `Coeficiente de aproveitamento MÁXIMO: <span class = "result">6</span>`
    tPerm.innerHTML = `Taxa de Permeabilidade: <span class = "result">5%</span>`
}//MUC

//ZEIA
function descrZeia(){
    descr.innerHTML = 'ZEIA - Áreas públicas ou privadas de interesse ambiental e paisagístico, necessárias à preservação e amenização do ambiente e aquelas destinadas a atividades esportivas, de lazer e ao turismo ambiental.'
}

function zeia1(){
    zoneamento.style.backgroundColor = '#00b82e'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE AMBIENTAL 1'
    descrZeia()
    descr.innerHTML += `<br><span class = "destaque">ZEIA 1</span>: Área destinada à proteção e recuperação dos recursos hídricos e seu entorno, com permissão de edificação unicamente para as finalidades de concessão da exploração das fontes e usos institucionais pertinentes ao lazer e turismo controlados, na forma que dispuser a lei municipal específica.`
    indices.style.display = 'none'
    recuos.style.display = 'none'
    viab.style.display = 'none'
    msgProibido.style.display = 'block'
    msgProibido.innerHTML = `<span class = "resultRed">Não é permitido nenhum tipo de construção no local, pois não há lei regulamentadora dos índices até a presente data.</span>`
}

function zeia2(){
    zoneamento.style.backgroundColor = '#9fff7f'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE AMBIENTAL 2'
    descrZeia()
    desd.innerHTML = `Desdobro mínimo permitido: <span class = "result">500m²</span>`
    tOcup.innerHTML = `Taxa de Ocupação: <span class = "result">50%</span>`
    caBasico.innerHTML = `Coeficiente de aproveitamento BÁSICO: <span class = "result">0,7</span>`
    caMaximo.innerHTML = `Coeficiente de aproveitamento MÁXIMO: <span class = "result">1</span>`
    tPerm.innerHTML = `Taxa de Permeabilidade: <span class = "result">20%</span>`
}

function zeia3(){
    zoneamento.style.backgroundColor = '#b8b800'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE AMBIENTAL 3'
    descrZeia()
    desd.innerHTML = `Desdobro mínimo permitido: <span class = "result">500m²</span>`
    tOcup.innerHTML = `Taxa de Ocupação: <span class = "result">50%</span>`
    caBasico.innerHTML = `Coeficiente de aproveitamento BÁSICO: <span class = "result">1</span>`
    caMaximo.innerHTML = `Coeficiente de aproveitamento MÁXIMO: <span class = "result">2</span>`
    tPerm.innerHTML = `Taxa de Permeabilidade: <span class = "result">20%</span>`
}

function zeia4(){
    zoneamento.style.backgroundColor = '#bfff00'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE AMBIENTAL 4'
    descrZeia()
    descr.innerHTML += `<br><span class = "destaque">ZEIA 4</span>: Área de Proteção Ambiental da Várzea do Rio Tietê (APA), Área de Proteção aos Mananciais (APM) e demais áreas protegidas por legislações Estaduais e Federais.`
    desd.innerHTML = `Desdobro mínimo permitido: <span class = "result">500m²</span>`
    tOcup.innerHTML = `Taxa de Ocupação: <span class = "result">70%</span>`
    caBasico.innerHTML = `Coeficiente de aproveitamento BÁSICO: <span class = "result">1,4</span>`
    caMaximo.innerHTML = `Coeficiente de aproveitamento MÁXIMO: <span class = "result">2</span>`
    tPerm.innerHTML = `Taxa de Permeabilidade: <span class = "result">5%</span>`
}//ZEIA

//ZEII
function zeii_IIIa(){
    zoneamento.style.backgroundColor = '#bababa'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE INDUSTRIAL'
    descr.innerHTML = 'ZEII - Áreas classificadas pela legislação municipal vigente como Zonas IIIA e IIIB e por legislação Estadual: ZUPI (Zona de Uso Predominantemente Industrial) e ZUC (Zona de Uso Controlado), exceto as porções territoriais destas sobrepostas pelo Cinturão Meândrico da Várzea do Rio Tietê.'
    desd.innerHTML = `Desdobro mínimo permitido: <span class = "result">500m²</span>`
    tOcup.innerHTML = `Taxa de Ocupação: <span class = "result">70%</span>`
    caBasico.innerHTML = `Coeficiente de aproveitamento BÁSICO: <span class = "result">1,4</span>`
    caMaximo.innerHTML = `Coeficiente de aproveitamento MÁXIMO: <span class = "result">2</span>`
    tPerm.innerHTML = `Taxa de Permeabilidade: <span class = "result">5%</span>`
}

function zeii_IIIb(){
    zeii_IIIa()
}//ZEII

//ZEIC
function zeic(){
    muc()
    zoneamento.style.backgroundColor = '#7fffff'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE COMERCIAL'
    descr.innerHTML = 'ZEIC - Porções territoriais nas quais predominam as atividades comerciais e de serviços ou aquelas com tendência e vocação à predominância das mesmas. São objetivos, o incentivo ao uso comercial e à requalificação de espaços e equipamentos públicos, na forma da lei municipal específica.'
}//ZEIC

//ZEIS
function zeis1(){
    muc()
    zoneamento.style.backgroundColor = '#ffff00'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE SOCIAL 1'
    descr.innerHTML = 'ZEIS - Porções territoriais destinadas prioritariamente à regularização fundiária, urbanização e à produção de Habitação de Interesse Social (HIS) e Habitação de Mercado Popular (HMP).'
}

function zeis2(){
    zeis1()
    zoneamento.style.backgroundColor = '#ffbf00'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE SOCIAL 2'
}

function zeis3(){
    zeis1()
    zoneamento.style.backgroundColor = '#ff7f00'
    zoneamento.innerHTML = 'ZONA ESPECIAL DE INTERESSE SOCIAL 3'
}//ZEIS

//ZONAS
function zonaI(){
    viab.innerHTML = `Viabilidade (Zona I): Permitido <span class = "destaque">residência unifamiliar ou multifamiliar, comércio de uso frequente, de serviço e o especial referente a indústria de pequeno porte não poluente</span>, desde que seja atendida a legislação de âmbito Federal, Estadual e Municipal pertinentes ao <em>Uso e Ocupação do Solo</em> conforme os parâmetros abaixo.`
    tipConstr.innerHTML = `Tipo da Construção: <span class = "result">${tipoConstruc.value}</span>`
    recFrontal.innerHTML = `Frontal: <span class = "result">Mínimo 4,00 Metros</span>`
    recLateral.innerHTML = `Laterais: <span class = "result">0</span>`
    if(tipoConstruc.value === 'Comercial'){
        recFundos.innerHTML = `Fundos: <span class = "result">Mínimo 3,00 Metros</span>`
        comEspecial.style.display = "block"
    }else if(tipoConstruc.value === 'Industrial'){
        recuos.style.display = 'none'
        msgProibido.style.display = 'block'
        msgProibido.innerHTML = `<span class = "resultRed">Não é permitido construção ${tipoConstruc.value} no local.</span>`
    }else{
        recFundos.innerHTML = `Fundos: <span class = "result">0</span>`
    }
}

function zonaIIa(){
    viab.innerHTML = `Viabilidade (Zona IIa): Permitido <span class = "destaque">residência unifamiliar</span>, desde que seja atendida a legislação de âmbito Federal, Estadual e Municipal pertinentes ao <em>Uso e Ocupação do Solo</em> conforme os parâmetros abaixo.`
    tipConstr.innerHTML = `Tipo da Construção: <span class = "result">${tipoConstruc.value}</span>`
    if(tipoConstruc.value === 'Residencial' || tipoConstruc.value === 'Turismo'){
        msgProibido.style.display = 'none'
        recFrontal.innerHTML = `Frontal: <span class = "result">Mínimo 6,00 Metros</span>`
        recLateral.innerHTML = `Laterais: <span class = "result">Mínimo 1,50 Metro</span>`
        recFundos.innerHTML = `Fundos: <span class = "result">Mínimo 3,00 Metros</span>`
    }else{
        recuos.style.display = 'none'
        msgProibido.style.display = 'block'
        msgProibido.innerHTML = `<span class = "resultRed">Não é permitido Construção ${tipoConstruc.value} no local.</span>`
    }
}

function zonaIIb(){
    zonaIIa()
    viab.innerHTML = `Viabilidade (Zona IIb): Permitido <span class = "destaque">residência unifamiliar</span>, desde que seja atendida a legislação de âmbito Federal, Estadual e Municipal pertinentes ao <em>Uso e Ocupação do Solo</em> conforme os parâmetros abaixo.`
}

function zonaIIc(){
    zonaI()
    if(tipoConstruc.value === 'Comercial'){
        comEspecial.style.display = "none"
        proibComEspecial.style.display = 'block'
    }
    viab.innerHTML = `Viabilidade (Zona IIc): Permitido <span class = "destaque">residência unifamiliar, comércio de uso frequente e o de serviço</span>, desde que seja atendida a legislação de âmbito Federal, Estadual e Municipal pertinentes ao <em>Uso e Ocupação do Solo</em> conforme os parâmetros abaixo.`
}

function zonaIIIa(){
    viab.innerHTML = `Viabilidade (Zona IIIa): Permitido <span class = "destaque">indústrias</span>, desde que seja atendida a legislação de âmbito Federal, Estadual e Municipal pertinentes ao <em>Uso e Ocupação do Solo</em> conforme os parâmetros abaixo.`
    tipConstr.innerHTML = `Tipo da Construção: <span class = "result">${tipoConstruc.value}</span>`
    if(tipoConstruc.value === 'Industrial' || tipoConstruc.value === 'Turismo'){
        msgProibido.style.display = 'none'
        recuos.style.display = 'block'
        recFrontal.innerHTML = `Frontal: <span class = "result">Mínimo 10,00 Metros</span>`
        recLateral.innerHTML = `Laterais: <span class = "result">Mínimo 3,00 Metros</span>`
        recFundos.innerHTML = `Fundos: <span class = "result">Mínimo 5,00 Metros</span>`
    }else if(tipoConstruc.value === 'Residencial'){
        recuos.style.display = 'none'
        msgProibido.style.display = 'block'
        msgProibido.innerHTML = `<span class = "resultRed">Não é permitido construção ${tipoConstruc.value} no local.</span>`
    }else{
        recuos.style.display = 'none'
        msgProibido.style.display = 'block'
        msgProibido.innerHTML = `<span class = "resultRed"> Construção ${tipoConstruc.value} (CS/CF/CE) é permitido somente nas vias que são Corredores Comerciais, não necessitanto de recuos.</span>`
    }
}

function zonaIIIb(){
    zonaIIIa()
    viab.innerHTML = `Viabilidade (Zona IIIb): Permitido <span class = "destaque">indústrias</span>, desde que seja atendida a legislação de âmbito Federal, Estadual e Municipal pertinentes ao <em>Uso e Ocupação do Solo</em> conforme os parâmetros abaixo.`
}//ZONAS

//ÁREAS DE RISCO
function riscoBaixo(){
    risco.style.display = 'block'
    risco.style.backgroundColor = '#37DD00'
}

function riscoMedio(){
    risco.style.display = 'block'
    risco.style.backgroundColor = '#FFFF00'
}

function riscoAlto(){
    risco.style.display = 'block'
    risco.style.backgroundColor = '#FF0000'
}

function riscoMuitoAlto(){
    risco.style.display = 'block'
    risco.style.backgroundColor = '#DD00DD'
}//ÁREAS DE RISCO