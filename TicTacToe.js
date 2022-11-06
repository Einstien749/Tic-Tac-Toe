var player1 = true;
var player2 = false;
var gameover = false;
var playcomputer = false;
var easy;
var hard;
var expert;
var undefeated;
var combo;
var combox;

var player1wins = false;
var player2wins = false;
var stale = false;


function Play(id){
    let k = document.getElementById(id);
    if((k.innerHTML == "") && (!gameover)){
        if(player1){
            k.innerHTML = "O";
            player1 = !player1;
            if(!playcomputer){
                player2 = !player2;
            }
            else{
                player2 = false;
            }
            
        }
        else if(player2 && !playcomputer){
            k.innerHTML = "X";
            player2 = !player2;
            player1 = !player1;
        }
    
    }
}
function PlayAgain(){
    var d11 = document.getElementById("11");
    var d12 = document.getElementById("12");
    var d13 = document.getElementById("13");
    var d21 = document.getElementById("21");
    var d22 = document.getElementById("22");
    var d23 = document.getElementById("23");
    var d31 = document.getElementById("31");
    var d32 = document.getElementById("32");
    var d33 = document.getElementById("33");
    document.getElementById("congrat").style.display = "none";
    var element = [d11,d12,d13,d21,d22,d23,d31,d32,d33];
    for(let k = 0; k<element.length; k++){
        element[k].innerHTML = "";
        element[k].style.color = "rgb(0,0,0)";
    }
    player1 = true;
    gameover = false;
    player1wins = false;
    player2wins = false;
    stale = false;
    if(playcomputer){
        player2 = false;
    }
    else{
        playcomputer = false;
        player2 = false;
    }
    setInterval(()=>{
        Check();
        Result();
        Computerplay();
    },2500);
}

function Check(){
    var d11 = document.getElementById("11");
    var d12 = document.getElementById("12");
    var d13 = document.getElementById("13");
    var d21 = document.getElementById("21");
    var d22 = document.getElementById("22");
    var d23 = document.getElementById("23");
    var d31 = document.getElementById("31");
    var d32 = document.getElementById("32");
    var d33 = document.getElementById("33");
    //var element = [d11,d12,d13,d21,d22,d23,d31,d32,d33];
    
    
    if(!gameover){
        //Check Row One
        if((d11.innerHTML == d12.innerHTML) && (d12.innerHTML == d13.innerHTML)){
            if(d11.innerHTML != ""){
                
                if(d11.innerHTML == "O"){
                    d11.style.color =  "rgb(0,255,0)";
                    d12.style.color =  "rgb(0,255,0)";
                    d13.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d11.style.color =  "rgb(255,0,0)";
                    d12.style.color =  "rgb(255,0,0)";
                    d13.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player1wins = false;
                    player2wins = true;
                }
            }    
            
        }
        
        //Check Row Two
        if((d21.innerHTML == d22.innerHTML) && (d22.innerHTML == d23.innerHTML)){
            if(d21.innerHTML != ""){
                if(d21.innerHTML == "O"){
                    d21.style.color =  "rgb(0,255,0)";
                    d22.style.color =  "rgb(0,255,0)";
                    d23.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d21.style.color =  "rgb(255,0,0)";
                    d22.style.color =  "rgb(255,0,0)";
                    d23.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player1wins = false;
                    player2wins = true;
                }
            }    
            
        }
        
        //Check Row Three
        
        if((d31.innerHTML == d32.innerHTML) && (d32.innerHTML == d33.innerHTML)){
            if(d31.innerHTML != ""){
                if(d31.innerHTML == "O"){
                    d31.style.color =  "rgb(0,255,0)";
                    d32.style.color =  "rgb(0,255,0)";
                    d33.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d31.style.color =  "rgb(255,0,0)";
                    d32.style.color =  "rgb(255,0,0)";
                    d33.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player1wins = false;
                    player2wins = true;
                }
            }    
            
        }
        
        
        //Check Column One
        if((d11.innerHTML == d21.innerHTML) && (d21.innerHTML == d31.innerHTML)){
            if(d11.innerHTML != ""){
                if(d11.innerHTML == "O"){
                    d11.style.color =  "rgb(0,255,0)";
                    d21.style.color =  "rgb(0,255,0)";
                    d31.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d11.style.color =  "rgb(255,0,0)";
                    d21.style.color =  "rgb(255,0,0)";
                    d31.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player1wins = false;
                    player2wins = true;
                }
                
            }
        }
        
        //Check Column Two
        if((d12.innerHTML == d22.innerHTML) && (d22.innerHTML == d32.innerHTML)){
            if(d12.innerHTML != ""){
                if(d12.innerHTML == "O"){
                    d12.style.color =  "rgb(0,255,0)";
                    d22.style.color =  "rgb(0,255,0)";
                    d32.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d12.style.color =  "rgb(255,0,0)";
                    d22.style.color =  "rgb(255,0,0)";
                    d32.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player1wins = false;
                    player2wins = true;
                }
            }    
            
        }
        
        //Check Column Three
        
        if((d13.innerHTML == d23.innerHTML) && (d23.innerHTML == d33.innerHTML)){
            if(d13.innerHTML != ""){
                if(d13.innerHTML == "O"){
                    d13.style.color =  "rgb(0,255,0)";
                    d23.style.color =  "rgb(0,255,0)";
                    d33.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d13.style.color =  "rgb(255,0,0)";
                    d23.style.color =  "rgb(255,0,0)";
                    d33.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player1wins = false;
                    player2wins = true;
                }
            }    
            
        }
        
        //Check Main Diagonal
        if((d11.innerHTML == d22.innerHTML) && (d22.innerHTML == d33.innerHTML)){
            if(d11.innerHTML != ""){
                if(d11.innerHTML == "O"){
                    d11.style.color =  "rgb(0,255,0)";
                    d22.style.color =  "rgb(0,255,0)";
                    d33.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d11.style.color =  "rgb(255,0,0)";
                    d22.style.color =  "rgb(255,0,0)";
                    d33.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player2wins = true;
                }
                
            }
        }
        
        //Check Of-Diagonal
        if((d13.innerHTML == d22.innerHTML) && (d22.innerHTML == d31.innerHTML)){
            if(d13.innerHTML != ""){
                if(d13.innerHTML == "O"){
                    d13.style.color =  "rgb(0,255,0)";
                    d22.style.color =  "rgb(0,255,0)";
                    d31.style.color =  "rgb(0,255,0)";
                    gameover = true;
                    player1wins = true;
                }
                else{
                    d13.style.color =  "rgb(255,0,0)";
                    d22.style.color =  "rgb(255,0,0)";
                    d31.style.color =  "rgb(255,0,0)";
                    gameover = true;
                    player2wins = true;
                }
                
            }
        }
        if((d11.innerHTML != "") && (d12.innerHTML != "") && (d13.innerHTML != "") && (d21.innerHTML != "") && (d22.innerHTML != "") && (d23.innerHTML != "") && (d31.innerHTML != "") && (d32.innerHTML != "") && (d33.innerHTML != "")){
            if(!player1wins && !player2wins){
                stale = true;
            }
            
        }

    }
        
}



function Result(){
    if(player1wins){
        document.getElementById("p2wins").style.display = "none";
        document.getElementById("draw").style.display = "none";
        setTimeout(() => {
            document.getElementById("congrat").style.display = "block";
            document.getElementById("congrat").style.opacity = "1";
            document.getElementById("p1wins").style.display = "flex";  
        }, 700);
        
        clearInterval(start);
    }
    else if(player2wins){
        document.getElementById("p1wins").style.display = "none";
        document.getElementById("draw").style.display = "none";
        setTimeout(() => {
            document.getElementById("congrat").style.display = "block";
            document.getElementById("congrat").style.opacity = "1";
            document.getElementById("p2wins").style.display = "flex"; 
        }, 700);
        
        clearInterval(start);
    }
    else{
        document.getElementById("p2wins").style.display = "none";
        document.getElementById("p1wins").style.display = "none";
        if(stale){
            setTimeout(() => {
                document.getElementById("congrat").style.display = "block";
                document.getElementById("congrat").style.opacity = "1";
                document.getElementById("draw").style.display = "flex";
            }, 700);

            clearInterval(start);
        }
    }
}

function Twoplayers(){
    let k = document.getElementById("display");
    let m = document.getElementById("select");
    
    m.style.opacity = "0";
    setTimeout(() => {
            m.style.display = "none";
            k.style.display = "block";
            k.style.opacity = "1";
            playcomputer = false;}, 500);
}

function Playcomputer(){
    let m = document.getElementById("select");
    let q = document.getElementById("levels");
    m.style.opacity = "0";
    setTimeout(() => {
            m.style.display = "none";
            q.style.display = "flex";
            q.style.opacity = "1";
            playcomputer = true;}, 500);

}

function Easy(){
    let k = document.getElementById("display");
    let q = document.getElementById("levels");
    q.style.opacity = "0";
    setTimeout(() => {
        q.style.display = "none";
        k.style.display = "block";
        k.style.opacity = "1";
        easy = true; 
     }, 500);
}

function Hard(){
    let k = document.getElementById("display");
    let q = document.getElementById("levels");
    q.style.opacity = "0";
    setTimeout(() => {
        q.style.display = "none";
        k.style.display = "block";
        k.style.opacity = "1";
        hard = true; 
     }, 500);
}

function Expert(){
    let k = document.getElementById("display");
    let q = document.getElementById("levels");
    q.style.opacity = "0";
    setTimeout(() => {
        q.style.display = "none";
        k.style.display = "block";
        k.style.opacity = "1";
        expert = true; 
     }, 500);
}

function Undefeated(){
    let k = document.getElementById("display");
    let q = document.getElementById("levels");
    q.style.opacity = "0";
    setTimeout(() => {
        q.style.display = "none";
        k.style.display = "block";
        k.style.opacity = "1";
        undefeated = true; 
     }, 500);
}

function Back(){
    let k = document.getElementById("select");
    let q = document.getElementById("levels");
    q.style.opacity = "0";
    setTimeout(() => {
        q.style.display = "none";
        k.style.display = "flex";
        k.style.opacity = "1";
        playcomputer = true; 
     }, 500);
}
function Checkmate(){
    
    let d11 = document.getElementById("11");
    let d12 = document.getElementById("12");
    let d13 = document.getElementById("13");
    let d21 = document.getElementById("21");
    let d22 = document.getElementById("22");
    let d23 = document.getElementById("23");
    let d31 = document.getElementById("31");
    let d32 = document.getElementById("32");
    let d33 = document.getElementById("33");
    
    
    //Check Possible Mate Row1
    if((d11.innerHTML == d12.innerHTML) && (d11.innerHTML== "O" && d13.innerHTML == "")){
        return d13;
    }
    else if((d12.innerHTML == d13.innerHTML) && (d12.innerHTML== "O" && d11.innerHTML == "")){
        return d11;
    }
    else if((d11.innerHTML == d13.innerHTML) && (d11.innerHTML== "O" && d12.innerHTML == "")){
        return d12;
    }
    
    //Check Possible Mate Row2
    
    else if((d21.innerHTML == d22.innerHTML) && (d21.innerHTML== "O" && d23.innerHTML == "")){
        return d23;
    }
    else if((d21.innerHTML == d23.innerHTML) && (d21.innerHTML== "O" && d22.innerHTML == "")){
        return d22;
    }
    
    else if((d22.innerHTML == d23.innerHTML) && (d22.innerHTML== "O" && d21.innerHTML == "")){
        return d21;
    }
    
    //Check Possible Mate Row3
    else if((d31.innerHTML == d32.innerHTML) && (d31.innerHTML== "O" && d33.innerHTML == "")){
        return d33;
    }
    else if((d31.innerHTML == d33.innerHTML) && (d31.innerHTML== "O" && d32.innerHTML == "")){
        return d32;
    }
    
    else if((d32.innerHTML == d33.innerHTML) && (d32.innerHTML== "O" && d31.innerHTML == "")){
        return d31;
    }
    
    //Check Possible Mate Column1
    
    else if((d11.innerHTML == d21.innerHTML) && (d11.innerHTML== "O" && d31.innerHTML == "")){
        return d31;
    }
    else if((d21.innerHTML == d31.innerHTML) && (d21.innerHTML== "O" && d11.innerHTML == "")){
        return d11;
    }
    
    else if((d11.innerHTML == d31.innerHTML) && (d11.innerHTML== "O" && d21.innerHTML == "")){
        return d21;
    }
    
    //Check Possible Mate Column2
    else if((d12.innerHTML == d22.innerHTML) && (d12.innerHTML== "O" && d32.innerHTML == "")){
        return d32;
    }
    else if((d22.innerHTML == d32.innerHTML) && (d22.innerHTML== "O" && d12.innerHTML == "")){
        return d12;
    }
    
    else if((d12.innerHTML == d32.innerHTML) && (d12.innerHTML== "O" && d22.innerHTML == "")){
        return d22;
    }
    
    //Check Possible Mate Column3
    else if((d13.innerHTML == d23.innerHTML) && (d13.innerHTML== "O" && d33.innerHTML == "")){
        return d33;
    }
    else if((d23.innerHTML == d33.innerHTML) && (d23.innerHTML== "O" && d13.innerHTML == "")){
        return d13;
    }
    
    else if((d13.innerHTML == d33.innerHTML) && (d13.innerHTML== "O" && d23.innerHTML == "")){
        return d23;
    }
    
    //Check Possible Mate Diagonal1
    else if((d11.innerHTML == d22.innerHTML) && (d11.innerHTML== "O" && d33.innerHTML == "")){
        return d33;
    }
    else if((d22.innerHTML == d33.innerHTML) && (d22.innerHTML== "O" && d11.innerHTML == "")){
        return d11;
    }
    
    else if((d11.innerHTML == d33.innerHTML) && (d11.innerHTML== "O" && d22.innerHTML == "")){
        return d22;
    }
    
    //Check Possible Mate Diagonal2
    else if((d13.innerHTML == d22.innerHTML) && (d13.innerHTML== "O" && d31.innerHTML == "")){
        return d31;
    }
    else if((d22.innerHTML == d31.innerHTML) && (d22.innerHTML== "O" && d13.innerHTML == "")){
        return d13;
    }
    
    else if((d13.innerHTML == d31.innerHTML) && (d13.innerHTML== "O" && d22.innerHTML == "")){
        return d22;
    }
    else{
        return "";
    }
    
}


function Computermate(){
    
    let d11 = document.getElementById("11");
    let d12 = document.getElementById("12");
    let d13 = document.getElementById("13");
    let d21 = document.getElementById("21");
    let d22 = document.getElementById("22");
    let d23 = document.getElementById("23");
    let d31 = document.getElementById("31");
    let d32 = document.getElementById("32");
    let d33 = document.getElementById("33");
    
    
    //Check Possible Mate Row1
    if((d11.innerHTML == d12.innerHTML) && (d11.innerHTML== "X" && d13.innerHTML == "")){
        return d13;
    }
    else if((d12.innerHTML == d13.innerHTML) && (d12.innerHTML== "X" && d11.innerHTML == "")){
        return d11;
    }
    else if((d11.innerHTML == d13.innerHTML) && (d11.innerHTML== "X" && d12.innerHTML == "")){
        return d12;
    }
    
    //Check Possible Mate Row2
    
    else if((d21.innerHTML == d22.innerHTML) && (d21.innerHTML== "X" && d23.innerHTML == "")){
        return d23;
    }
    else if((d21.innerHTML == d23.innerHTML) && (d21.innerHTML== "X" && d22.innerHTML == "")){
        return d22;
    }
    
    else if((d22.innerHTML == d23.innerHTML) && (d22.innerHTML== "X" && d21.innerHTML == "")){
        return d21;
    }
    
    //Check Possible Mate Row3
    else if((d31.innerHTML == d32.innerHTML) && (d31.innerHTML== "X" && d33.innerHTML == "")){
        return d33;
    }
    else if((d31.innerHTML == d33.innerHTML) && (d31.innerHTML== "X" && d32.innerHTML == "")){
        return d32;
    }
    
    else if((d32.innerHTML == d33.innerHTML) && (d32.innerHTML== "X" && d31.innerHTML == "")){
        return d31;
    }
    
    //Check Possible Mate Column1
    
    else if((d11.innerHTML == d21.innerHTML) && (d11.innerHTML== "X" && d31.innerHTML == "")){
        return d31;
    }
    else if((d21.innerHTML == d31.innerHTML) && (d21.innerHTML== "X" && d11.innerHTML == "")){
        return d11;
    }
    
    else if((d11.innerHTML == d31.innerHTML) && (d11.innerHTML== "X" && d21.innerHTML == "")){
        return d21;
    }
    
    //Check Possible Mate Column2
    else if((d12.innerHTML == d22.innerHTML) && (d12.innerHTML== "X" && d32.innerHTML == "")){
        return d32;
    }
    else if((d22.innerHTML == d32.innerHTML) && (d22.innerHTML== "X" && d12.innerHTML == "")){
        return d12;
    }
    
    else if((d12.innerHTML == d32.innerHTML) && (d12.innerHTML== "X" && d22.innerHTML == "")){
        return d22;
    }
    
    //Check Possible Mate Column3
    else if((d13.innerHTML == d23.innerHTML) && (d13.innerHTML== "X" && d33.innerHTML == "")){
        return d33;
    }
    else if((d23.innerHTML == d33.innerHTML) && (d23.innerHTML== "X" && d13.innerHTML == "")){
        return d13;
    }
    
    else if((d13.innerHTML == d33.innerHTML) && (d13.innerHTML== "X" && d23.innerHTML == "")){
        return d23;
    }
    
    //Check Possible Mate Diagonal1
    else if((d11.innerHTML == d22.innerHTML) && (d11.innerHTML== "X" && d33.innerHTML == "")){
        return d33;
    }
    else if((d22.innerHTML == d33.innerHTML) && (d22.innerHTML== "X" && d11.innerHTML == "")){
        return d11;
    }
    
    else if((d11.innerHTML == d33.innerHTML) && (d11.innerHTML== "X" && d22.innerHTML == "")){
        return d22;
    }
    
    //Check Possible Mate Diagonal2
    else if((d13.innerHTML == d22.innerHTML) && (d13.innerHTML== "X" && d31.innerHTML == "")){
        return d31;
    }
    else if((d22.innerHTML == d31.innerHTML) && (d22.innerHTML== "X" && d13.innerHTML == "")){
        return d13;
    }
    
    else if((d13.innerHTML == d31.innerHTML) && (d13.innerHTML== "X" && d22.innerHTML == "")){
        return d22;
    }
    else{
        return "";
    }
    
}
function Edge(){
    let d11 = document.getElementById("11");
    let d13 = document.getElementById("13");
    let d31 = document.getElementById("31");
    let d33 = document.getElementById("33");
    
    if(d11.innerHTML == ""){
        return d11;
    }
    else if(d13.innerHTML == ""){
        return d13;
    }
    else if(d31.innerHTML == ""){
        return d31;
    }
    else if(d33.innerHTML == ""){
        return d33;
    }
    else{
        return "";
    }
}



function Computerplay(){
    let d11 = document.getElementById("11");
    let d12 = document.getElementById("12");
    let d13 = document.getElementById("13");
    let d21 = document.getElementById("21");
    let d22 = document.getElementById("22");
    let d23 = document.getElementById("23");
    let d31 = document.getElementById("31");
    let d32 = document.getElementById("32");
    let d33 = document.getElementById("33");
    let element = [d11,d12,d13,d21,d22,d23,d31,d32,d33];
    let empty = [];
    let played = [];
    //let edgeelement = [d11,d13,d31,d33];
    
    for(var p of element){
        if(p.innerHTML == ""){
            empty.push(p);
        }
        else{
            played.push(p);
        }
    }
    if((empty != []) && (!player1 && !player2 && playcomputer ) && !gameover && easy){
        let sel = Math.floor((Math.random())*(empty.length));
        empty[sel].innerHTML = "X";
        player1 = !player1;
    }
    if((empty != []) && (!player1 && !player2 && playcomputer ) && !gameover && hard){
        
        if(Checkmate() == ""){
            let sels = Math.floor((Math.random())*(empty.length));
            empty[sels].innerHTML = "X";
            player1 = !player1;
        }
        else{
            Checkmate().innerHTML = "X";
            player1 = !player1;
        }
        
    }
    
    if((empty != []) && (!player1 && !player2 && playcomputer ) && !gameover && expert){
        
        if(Computermate() == ""){
            if(Checkmate() != ""){
               Checkmate().innerHTML = "X";
               player1 = !player1; 
            }
            else{
                let sels = Math.floor((Math.random())*(empty.length));
                empty[sels].innerHTML = "X";
                player1 = !player1;
            }
            
        }
        else{
            Computermate().innerHTML = "X";
            player1 = !player1;
        }
        
    }
    
    if((empty != []) && (!player1 && !player2 && playcomputer ) && !gameover && undefeated){
        if(((played.length + 1)/2) == 1){
            if(d22.innerHTML == "O"){
                combo = true;
                Edge().innerHTML = "X";
                player1 = !player1;
            }
            else{
                d22.innerHTML = "X";
                combo = false;
                player1 = !player1;
            }
        }
        if(combo){
            if(((played.length + 1)/2) == 2 || ((played.length + 1)/2) == 3 || ((played.length + 1)/2) == 4 || ((played.length + 1)/2) == 5){
                if(Computermate() == ""){
                    if(Checkmate() == ""){
                        if(Edge() != ""){
                            Edge().innerHTML = "X";
                            player1 = !player1;
                        }
                        else{
                            let sels = Math.floor((Math.random())*(empty.length));
                            empty[sels].innerHTML = "X";
                            player1 = !player1;
                        }
                    }
                    else{
                        Checkmate().innerHTML = "X";
                        player1 = !player1;
                    }
                }
                else{
                    Computermate().innerHTML = "X";
                    player1 = !player1;
                }
            }
        }
        else{
            if(((played.length + 1)/2) == 2){
                if(d11.innerHTML == "O" || d13.innerHTML == "O" || d31.innerHTML == "O" || d33.innerHTML == "O"){
                    if(d11.innerHTML == "O" && d23.innerHTML == "O"){
                        d13.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d11.innerHTML == "O" && d32.innerHTML == "O"){
                        d31.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d13.innerHTML == "O" && d32.innerHTML == "O"){
                        d33.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d13.innerHTML == "O" && d21.innerHTML == "O"){
                        d11.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d31.innerHTML == "O" && d12.innerHTML == "O"){
                        d11.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d31.innerHTML == "O" && d23.innerHTML == "O"){
                        d33.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d33.innerHTML == "O" && d21.innerHTML == "O"){
                        d31.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d33.innerHTML == "O" && d12.innerHTML == "O"){
                        d13.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d33.innerHTML == "O" && d11.innerHTML == "O"){
                        d12.innerHTML = "X";
                        player1 = !player1;
                    }
                    else if(d31.innerHTML == "O" && d13.innerHTML == "O"){
                        d32.innerHTML = "X";
                        player1 = !player1;
                    }
                    else{
                        if(Computermate() == ""){
                            if(Checkmate() != ""){
                                Checkmate().innerHTML = "X";
                                player1 = !player1;
                            }
                            else{
                                let sels = Math.floor((Math.random())*(empty.length));
                                empty[sels].innerHTML = "X";
                                player1 = !player1;
                            }
            
                        }
                    }
                }
                else{
                    if(Computermate() == ""){
                        if(Checkmate() != ""){
                            Checkmate().innerHTML = "X";
                            player1 = !player1;
                        }
                        else{
                            let sels = Math.floor((Math.random())*(empty.length));
                            empty[sels].innerHTML = "X";
                            player1 = !player1;
                        }
            
                    }
                }
            }
            else if(((played.length + 1)/2) == 3 || ((played.length + 1)/2) == 4 || ((played.length + 1)/2) == 5 ){
                if(Computermate() == ""){
                    if(Checkmate() != ""){
                        Checkmate().innerHTML = "X";
                        player1 = !player1; 
                    }
                    else{
                        let sels = Math.floor((Math.random())*(empty.length));
                        empty[sels].innerHTML = "X";
                        player1 = !player1;
                    }
            
                }
                else{
                    Computermate().innerHTML = "X";
                    player1 = !player1;
                }
            }
        }
    }
}

const start = setInterval(()=>{
    Check();
    Result();
    Computerplay();
},2500);