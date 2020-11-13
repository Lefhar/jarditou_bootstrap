function verif(){
//début de recupération des données du formulaire
        var nom = document.formulaire_contact.nom.value;
        var prenom = document.formulaire_contact.prenom.value;
        var date = document.formulaire_contact.date.value;
        var mescommandes = document.formulaire_contact.mescommandes.value;
        var email = document.formulaire_contact.email.value;
        var cgu = document.querySelector('#cgu:checked');
        var question = document.formulaire_contact.question.value;

        //regex de contrôle des données
        var verif 	= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
        var ctrnom= /^[a-zA-Z]{2,}$/
        var ctrprenom = /^[a-zA-Z]{2,}$/
        var ctrmescommandes = /^[a-zA-Z]{4,}$/ 
        var ctrdate = /^[0-9]{4,4}-[0-9]{2,2}-[0-9]{2,2}$/
        var ctrquestion = /^[a-zA-Z0-9_.-]{4,}$/


    if (verif.exec(email) == null){// si email ne contient pas des lettre point chiffre avant @ aprés arobase pareilhormis là le point est interdit etc
        document.getElementById("demail").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer une email correct</div>";//si c'est null on affiche box alerte
        document.getElementById("email").className = "form-control is-invalid";//on change la couleur de l'input en rouge
        var controlmail = false;//on retourne false au form pour évité l'envoie du formulaire
    }else{
        document.getElementById("email").className = "form-control is-valid";//on change la couleur de l'input en vert
        document.getElementById("demail").style.display = 'none';//vu que c'est bon on masque la div alerte
     var controlmail = true;//on retourne true pour cette variable
    } 

 
    if (ctrnom.exec(nom) == null){//si nom ne contient pas au moins deux lettre on sait jamais monsieur wu sa existe :D
        document.getElementById("dnom").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Veuillez entrer correctement votre Nom</div>";//si c'est null on affiche box alerte
        var controlnom = false;//on retourne false au form pour évité l'envoie du formulaire
        document.getElementById("nom").className = "form-control is-invalid";//on change la couleur de l'input en rouge
    }else{
        document.getElementById("nom").className = "form-control is-valid";//on change la couleur de l'input en vert
        document.getElementById("dnom").style.display = 'none';//vu que c'est bon on masque la div alerte
        var controlnom = true;//on retourne true pour cette variable
    }


    if (ctrprenom.exec(prenom) == null){// si prenom ne contient pas au moins deux caractére alphabétique pareil on rejette
        document.getElementById("dprenom").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Veuillez entrer correctement votre Prénom</div>";//si c'est null on affiche box alerte
        var controlprenom = false;//on retourne false au form pour évité l'envoie du formulaire
        document.getElementById("prenom").className = "form-control is-invalid";//on change la couleur de l'input en rouge
    }else{
        document.getElementById("prenom").className = "form-control is-valid";//on change la couleur de l'input en vert
        document.getElementById("dprenom").style.display = 'none';//vu que c'est bon on masque la div alerte
        var controlprenom = true;//on retourne true pour cette variable
    }


    if (ctrdate.exec(date) == null){//si la date ne ressemble pas à 0000-00-00 c'est que ce n'est pas correcte c'est se que retourne type date dans l'input
        document.getElementById("ddate").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Veuillez entrer une date valide exemple 01/01/2020</div>";//si c'est null on affiche box alerte
        var controldate = false;//on retourne false au form pour évité l'envoie du formulaire
        document.getElementById("date").className = "form-control is-invalid";//on change la couleur de l'input en rouge
    }else{
        document.getElementById("date").className = "form-control is-valid";//on change la couleur de l'input en vert
        document.getElementById("ddate").style.display = 'none';//vu que c'est bon on masque la div alerte
        var controldate = true;//on retourne true pour cette variable
    }


    if (mescommandes == ""){// si commande c'est vide c'est à dire rien n'a était séléctionné
       
        document.getElementById("dmescommandes").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Vous devez séléctionner un sujet</div>";//si c'est null on affiche box alerte
        document.getElementById("mescommandes").className = "form-control is-invalid";//on change la couleur de l'input en rouge
        var controlmescommandes = false;//on retourne false au form pour évité l'envoie du formulaire
    }else{
        document.getElementById("mescommandes").className = "form-control is-valid";//on change la couleur de l'input en vert
        document.getElementById("dmescommandes").style.display = 'none';//vu que c'est bon on masque la div alerte
        var controlmescommandes = true; //on retourne true pour cette variable
    }


    if (ctrquestion.exec(question) == null){//si ya pas au moins 4 caractéres alpha numérique entré alors on refuse
   
        document.getElementById("dquestion").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Vous devez nous indiquer votre question</div>";//si c'est null on affiche box alerte
        document.getElementById("question").className = "form-control is-invalid";//on change la couleur de l'input en rouge
        var controlquestion = false; //on retourne false au form pour évité l'envoie du formulaire
    }else{
        document.getElementById("question").className = "form-control is-valid";//on change la couleur de l'input en vert
        document.getElementById("dquestion").style.display = 'none';//vu que c'est bon on masque la div alerte
        var controlquestion= true;//on retourne true pour cette variable
    }


    if (cgu == null){//si cgu n'a pas était cocher alors on refuse
  
        document.getElementById("dcgu").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Vous devez accepter nos conditionns</div>";//si c'est null on affiche box alerte
        document.getElementById("cgu").className = "custom-control-input is-invalid";//on change la couleur de l'input en rouge
        var controlcgu = false;//on retourne false au form pour évité l'envoie du formulaire
    }else{
        document.getElementById("cgu").className = "custom-control-input is-valid";//on change la couleur de l'input en vert
        document.getElementById("dcgu").style.display = 'none';//vu que c'est bon on masque la div alerte
        var controlcgu = true;//on retourne true pour cette variable
    }

    if(controlnom&&controlprenom&&controlmail&&controldate&&controlmescommandes&&controlquestion&&controlcgu){//maintenant on s'assure que tout est valide 
    }else{//sinon on renvoi bien un false
        return false;
    }
    }