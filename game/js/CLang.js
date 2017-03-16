    var TEXT_PLAY;
    var TEXT_EXIT;
    var TEXT_HINT;
    var TEXT_SCORE;
    var TEXT_TIME;
    var TEXT_BONUS_TIME;
    var TEXT_BONUS;
    var TEXT_BONUS_SCORE;
    var TEXT_SKIP;
    var TEXT_RETRY;
    var TEXT_HELP;
	var TEXT_MORE_GAMES;
    var TEXT_AVAILABLE_COUPLES;
    var TEXT_SHUFFLE;
    var TEXT_RESTART;
    var TEXT_FINAL_SCORE;
    var TEXT_HELP_1;
    var TEXT_HELP_2;
    var TEXT_YES;
    var TEXT_NO;
    var TEXT_TITLE_EXIT_FROM_GAME;
    var TEXT_MSG_EXIT_FROM_GAME;
    var TEXT_LOADING;
    var TEXT_CHOOSE_LAYOUT;
    var TEXT_DIFF_0;
    var TEXT_DIFF_1;
    var TEXT_DIFF_2;
    var TEXT_CONGRATULATIONS;
    var TEXT_NO_MORE_TILES;
    var TEXT_ERR_CALL_TITLE;
    var TEXT_ERR_CALL_MSG;

    var TEXT_LAYOUT_CLASSIC;
    var TEXT_LAYOUT_MONUMENT;
    var TEXT_LAYOUT_PYRAMIDS;
    var TEXT_LAYOUT_ARENA;
    var TEXT_LAYOUT_FOUR;
    var TEXT_LAYOUT_THE_WALL;
    
    
function CLang(szLang){

    this.initLangDE = function(){
        TEXT_PLAY   = "SPIELEN";
        TEXT_EXIT = "VERLASSEN";
        TEXT_HINT = "TIPP";
        TEXT_SCORE  = "PARTITUR";
        TEXT_HELP = "BEISTAND";
		TEXT_MORE_GAMES="MORE GAMES";
        TEXT_AVAILABLE_COUPLES = "VERFÜGBARE PAARE";
        TEXT_SHUFFLE = "MISCHEN";
        TEXT_RESTART = "NEU STARTEN";
        TEXT_RETRY = "WIEDERHOLEN";
        TEXT_FINAL_SCORE = "ENDSTAND";
        TEXT_TIME = "ZEIT";
        TEXT_BONUS_TIME = "BONUS-ZEIT";
        TEXT_BONUS = "BONUS";
        TEXT_BONUS_SCORE = "BONUSPUNKTE";
        TEXT_HELP_1 = "WÄHLEN SIE GRUPPEN IDENTISCHER SPIELSTEINE ZU ENTFERNEN SIE SIE AUS DER EBENE.";
        TEXT_HELP_2 = "ENTFERNEN SIE DIE KARTEN IN ZEIT BONUS ZU BEKOMMEN EINE HÖHERE PUNKTZAHL!";
        TEXT_YES = "JA";
        TEXT_NO = "NEIN";
        TEXT_TITLE_EXIT_FROM_GAME = "ACHTUNG";
        TEXT_MSG_EXIT_FROM_GAME = "WOLLEN SIE DAS SPIEL VERLASSEN?";
        TEXT_SKIP = "ÜBERGEHEN";
        TEXT_LOADING = "BITTE WARTEN...";
        TEXT_CHOOSE_LAYOUT = "WÄHLEN SIE EIN LAYOUT";
        TEXT_DIFF_0 = "LEICHT";
        TEXT_DIFF_1 = "MITTEL";
        TEXT_DIFF_2 = "HART";
        TEXT_CONGRATULATIONS = "GLÜCKWÜNSCHE!!!";
        TEXT_NO_MORE_TILES = "KEINE WEITEREN FLIESEN WÄHLBAR";
        TEXT_ERR_CALL_TITLE = "VERBINDUNGSFEHLER";
        TEXT_ERR_CALL_MSG = "KEINE VERBINDUNG ZUM SERVER HERSTELLEN, UM DIE GEWÜNSCHTE OPERATION AUSFÜHREN KANN!";

        TEXT_LAYOUT_CLASSIC = "KLASSIKER";
        TEXT_LAYOUT_MONUMENT = "DENKMAL";
        TEXT_LAYOUT_PYRAMIDS = "PYRAMIDE";
        TEXT_LAYOUT_ARENA = "ARENA";
        TEXT_LAYOUT_FOUR = "VIER";
        TEXT_LAYOUT_THE_WALL = "DIE WAND";
        
    };
    
    this.initLangENG = function(){
        TEXT_PLAY   = "PLAY";
        TEXT_EXIT = "EXIT";
        TEXT_HINT = "HINT";
        TEXT_SCORE  = "SCORE";
        TEXT_HELP = "HELP";
		TEXT_MORE_GAMES="MORE GAMES";
        TEXT_AVAILABLE_COUPLES = "AVAILABLE COUPLES";
        TEXT_SHUFFLE = "SHUFFLE";
        TEXT_RESTART = "RESTART";
        TEXT_RETRY = "RETRY";
        TEXT_FINAL_SCORE = "FINAL SCORE";
        TEXT_TIME = "TIME";
        TEXT_BONUS_TIME = "BONUS TIME";
        TEXT_BONUS = "BONUS";
        TEXT_BONUS_SCORE = "BONUS SCORE";
        TEXT_HELP_1 = "MATCH NOT-BLOCKED PAIRS OF EQUAL TILES AND REMOVE THEM FROM THE BOARD.";
        TEXT_HELP_2 = "TRY TO MATCH TILES WITHIN BONUS TIME TO GAIN MORE POINTS!";
        TEXT_YES = "YES";
        TEXT_NO = "NO";
        TEXT_TITLE_EXIT_FROM_GAME = "WARNING";
        TEXT_MSG_EXIT_FROM_GAME = "DO YOU REALLY WANT TO LEAVE THE GAME?";
        TEXT_SKIP = "SKIP";
        TEXT_LOADING = "PLEASE WAIT...";
        TEXT_CHOOSE_LAYOUT = "CHOOSE A LAYOUT";
        TEXT_DIFF_0 = "EASY";
        TEXT_DIFF_1 = "MEDIUM";
        TEXT_DIFF_2 = "HARD";
        TEXT_CONGRATULATIONS = "CONGRATULATIONS!!!";
        TEXT_NO_MORE_TILES = "NO MORE TILES SELECTABLE";
        TEXT_ERR_CALL_TITLE = "CONNECTION ERROR";
        TEXT_ERR_CALL_MSG = "UNABLE TO CONNECT TO THE SERVER TO EXECUTE THE REQUIRED OPERATION!";

        TEXT_LAYOUT_CLASSIC = "ENGAGE";
        TEXT_LAYOUT_MONUMENT = "MONUMENT";
        TEXT_LAYOUT_PYRAMIDS = "PYRAMIDS";
        TEXT_LAYOUT_ARENA = "ARENA";
        TEXT_LAYOUT_FOUR = "FOUR";
        
        TEXT_LAYOUT_THE_WALL = "THE WALL";
        
    };
    
    this.initLangES = function(){
        TEXT_PLAY   = "JUEGAS";
        TEXT_EXIT = "SALES";
		TEXT_MORE_GAMES="MORE GAMES";
        TEXT_HINT = "SUGERENCIA";
        TEXT_SCORE  = "MARCADOR";
        TEXT_HELP = "AYUDA";
        TEXT_AVAILABLE_COUPLES = "PAREJAS DISPONIBLES";
        TEXT_SHUFFLE = "MEZCLA";
        TEXT_RESTART = "RECOMIENZAS";
        TEXT_RETRY = "REINTENTA";
        TEXT_FINAL_SCORE = "PUNTUACIÓN FINAL";
        TEXT_TIME = "TIEMPO";
        TEXT_BONUS_TIME = "TIEMPO BONUS";
        TEXT_BONUS = "BONUS";
        TEXT_BONUS_SCORE = "MARCADOR BONUS";
        TEXT_HELP_1 = "SELECCIONARÁ PAREJAS IDÉNTICAS DE TEJAS LIBRES PARA ELIMINARLAS DE LEVEL.";
        TEXT_HELP_2 = "INTENTAS QUITAR LAS TEJAS  EN EL TIEMPO BONUS PARA OBTENER UNA PUNTUACIÓN MAS ALTO!";
        TEXT_YES = "SÍ";
        TEXT_NO = "NO";
        TEXT_TITLE_EXIT_FROM_GAME = "ADVERTENCIA";
        TEXT_MSG_EXIT_FROM_GAME = "¿SEGURO QUE DEJA EL JUEGO?";
        TEXT_SKIP = "SALTARSE";
        TEXT_LOADING = "ESPERE POR FAVOR ...";
        TEXT_CHOOSE_LAYOUT = "ELIGE UN ESQUEMA";
        TEXT_DIFF_0 = "FÁCIL";
        TEXT_DIFF_1 = "MEDIANO";
        TEXT_DIFF_2 = "DIFÍCIL";
        TEXT_CONGRATULATIONS = "CONGRATULACIONES!!!";
        TEXT_NO_MORE_TILES = "NO HAY MÁS FICHAS SELECCIONABLES";
        TEXT_ERR_CALL_TITLE = "ERROR DE CONEXIÓN";
        TEXT_ERR_CALL_MSG = "¡ NO ES POSIBLE CONECTARSE AL SERVIDOR PARA EJECUTAR LA OPERACIÓN SOLICITADA !";

        TEXT_LAYOUT_CLASSIC = "CLÁSICO";
        TEXT_LAYOUT_MONUMENT = "MONUMENTO";
        TEXT_LAYOUT_PYRAMIDS = "PIRÁMIDE";
        TEXT_LAYOUT_ARENA = "ARENA";
        TEXT_LAYOUT_FOUR = "CUATRO";
        TEXT_LAYOUT_THE_WALL = "LA PARED";
       
    };
    
    this.initLangFR = function(){
        TEXT_PLAY   = "JOUES";
        TEXT_EXIT = "SORTIE";
		TEXT_MORE_GAMES="MORE GAMES";
        TEXT_HINT = "AIDE";
        TEXT_SCORE  = "SCORE";
        TEXT_HELP = "AIDER";
        TEXT_AVAILABLE_COUPLES = "COUPLES DISPONIBLES";
        TEXT_SHUFFLE = "BATS";
        TEXT_RESTART = "RECOMMENCES";
        TEXT_RETRY = "RÉESSAIE";
        TEXT_FINAL_SCORE = "SCORE FINAL";
        TEXT_TIME = "TEMPS";
        TEXT_BONUS_TIME = "TEMPS PRIME";
        TEXT_BONUS = "PRIME";
        TEXT_BONUS_SCORE = "SCORE BONUS";
        TEXT_HELP_1 = "SÉLECTIONNEZ PAIRES IDENTIQUES DE TUILES LIBRES ET RETIREZ-LES DE NIVEAU.";
        TEXT_HELP_2 = "ESSAYEZ DE FAIRE CORRESPONDRE LES TUILES DANS BONUS DE TEMPS POUR GAGNER PLUS DE POINTS!";
        TEXT_YES = "OUI";
        TEXT_NO = "NON";
        TEXT_TITLE_EXIT_FROM_GAME = "ATTENTION";
        TEXT_MSG_EXIT_FROM_GAME = "VOULEZ-VOUS LAISSER LE JEU?";
        TEXT_SKIP = "PASSER";
        TEXT_LOADING = "VEUILLEZ PATIENTER...";
        TEXT_CHOOSE_LAYOUT = "CHOISISSEZ UNE LAYOUT ";
        TEXT_DIFF_0 = "FACILE";
        TEXT_DIFF_1 = "MOYENNE";
        TEXT_DIFF_2 = "DIFFICILE";
        TEXT_CONGRATULATIONS = "FÉLICITATIONS!!!";
        TEXT_NO_MORE_TILES = "IL N'Y A PAS PLUS DE TUILES PEUVENT ÊTRE SÉLECTIONNÉS";
        TEXT_ERR_CALL_TITLE = "ERREUR DE CONNEXION";
        TEXT_ERR_CALL_MSG = "IMPOSSIBLE DE SE CONNECTER AU SERVEUR POUR EXÉCUTER L'OPÉRATION REQUISE!";

        TEXT_LAYOUT_CLASSIC = "CLASSIQUE";
        TEXT_LAYOUT_MONUMENT = "MONUMENT";
        TEXT_LAYOUT_PYRAMIDS = "PIRAMIDE";
        TEXT_LAYOUT_ARENA = "ARÉNE";
        TEXT_LAYOUT_FOUR = "QUATRE";
        TEXT_LAYOUT_THE_WALL = "LE MUR";
        
    };
    
    this.initLangITA = function(){
        TEXT_PLAY   = "GIOCA";
        TEXT_EXIT = "ESCI";
		TEXT_MORE_GAMES="MORE GAMES";
        TEXT_HINT = "AIUTO";
        TEXT_SCORE  = "PUNTEGGIO";
        TEXT_HELP = "AIUTO";
        TEXT_AVAILABLE_COUPLES = "COPPIE DISPONIBILI";
        TEXT_SHUFFLE = "MISCHIA";
        TEXT_RESTART = "RIPETI";
        TEXT_RETRY = "RIPROVA";
        TEXT_FINAL_SCORE = "PUNTEGGIO FINALE";
        TEXT_TIME = "TEMPO";
        TEXT_BONUS_TIME = "TEMPO BONUS";
        TEXT_BONUS = "BONUS";
        TEXT_BONUS_SCORE = "PUNTEGGIO BONUS";
        TEXT_HELP_1 = "SELEZIONA COPPIE IDENTICHE DI TESSERE LIBERE PER RIMUOVERLE DAL LIVELLO.";
        TEXT_HELP_2 = "CERCA DI RIMUOVERE LE TESSERE ENTRO IL TEMPO BONUS PER OTTENERE UN PUNTEGGIO PIU' ALTO!";
        TEXT_YES = "SI";
        TEXT_NO = "NO";
        TEXT_TITLE_EXIT_FROM_GAME = "ATTENZIONE";
        TEXT_MSG_EXIT_FROM_GAME = "SEI SICURO DI USCIRE DAL GIOCO?";
        TEXT_SKIP = "SALTA";
        TEXT_LOADING = "CARICAMENTO...";
        TEXT_CHOOSE_LAYOUT = "SCEGLI UN LIVELLO";
        TEXT_DIFF_0 = "FACILE";
        TEXT_DIFF_1 = "MEDIO";
        TEXT_DIFF_2 = "DIFFICILE";
        TEXT_CONGRATULATIONS = "CONGRATULAZIONI!!!";
        TEXT_NO_MORE_TILES = "NON CI SONO PIÚ TESSERE SELEZIONABILI";
        TEXT_ERR_CALL_TITLE = "ERRORE DI CONNESSIONE";
        TEXT_ERR_CALL_MSG = "IMPOSSIBILE CONTATTARE IL SERVER PER EFFETTUARE L'OPERAZIONE DESIDERATA!";

        TEXT_LAYOUT_CLASSIC = "CLASSICO";
        TEXT_LAYOUT_MONUMENT = "MONUMENTO";
        TEXT_LAYOUT_PYRAMIDS = "PIRAMIDI";
        TEXT_LAYOUT_ARENA = "ARENA";
        TEXT_LAYOUT_FOUR = "QUATTRO";
        TEXT_LAYOUT_THE_WALL = "IL MURO";
    };
    
    this.initLangNL = function(){
        TEXT_PLAY   = "SPELEN";
        TEXT_EXIT = "UITGANG";
		TEXT_MORE_GAMES="MORE GAMES";
        TEXT_HINT = "TIP";
        TEXT_SCORE  = "PARTITUUR";
        TEXT_HELP = "HULP";
        TEXT_AVAILABLE_COUPLES = "BESCHIKBAAR PAREN";
        TEXT_SHUFFLE = "SCHUIFELEN";
        TEXT_RESTART = "OPNIEUW BEGINNEN";
        TEXT_RETRY = "OPNIEUW PROBEREN";
        TEXT_FINAL_SCORE = "EINDSCORE";
        TEXT_TIME = "TIJD";
        TEXT_BONUS_TIME = "BONUS TIJD";
        TEXT_BONUS = "BONUS";
        TEXT_BONUS_SCORE = "BONUS SCORE";
        TEXT_HELP_1 = "SELECTEER PAREN VAN IDENTIEKE STENEN ON ZE TE VERWIJDEREN VAN HET NIVEAU.";
        TEXT_HELP_2 = "PROBEER TEGELS PASSEN BINNEN BONUS TIME TO MEER PUNTEN TE VERDIENEN!";
        TEXT_YES = "JA";
        TEXT_NO = "NEE";
        TEXT_TITLE_EXIT_FROM_GAME = "ATTENTIE";
        TEXT_MSG_EXIT_FROM_GAME = "WIL JE HET SPEL TE VERLATEN?";
        TEXT_SKIP = "OVERSLAAN";
        TEXT_LOADING = "EVEN GEDULD AUB...";
        TEXT_CHOOSE_LAYOUT = "KIES EEN LAYOUT";
        TEXT_DIFF_0 = "EENVOUDIG";
        TEXT_DIFF_1 = "GEMIDDELD";
        TEXT_DIFF_2 = "HARDE";
        TEXT_CONGRATULATIONS = "GEFELICITEERD!!!";
        TEXT_NO_MORE_TILES = "NIET MEER TEGELS SELECTEERBAAR";
        TEXT_ERR_CALL_TITLE = "VERBINDINGSFOUT";
        TEXT_ERR_CALL_MSG = "GEEN VERBINDING MET DE SERVER OM DE GEWENSTE HANDELING UIT TE VOEREN!";

        TEXT_LAYOUT_CLASSIC = "KLASSIEK";
        TEXT_LAYOUT_MONUMENT = "MONUMENT";
        TEXT_LAYOUT_PYRAMIDS = "PIRAMIDE";
        TEXT_LAYOUT_ARENA = "ARENA";
        TEXT_LAYOUT_FOUR = "VIER";
        TEXT_LAYOUT_THE_WALL = "DE MUUR";
        
    };
    
    this.initLangPOR = function(){
        TEXT_PLAY   = "JOGA";
        TEXT_EXIT = "SAIR";
		TEXT_MORE_GAMES="MORE GAMES";
        TEXT_HINT = "SUGESTÃO";
        TEXT_SCORE  = "ESCORE";
        TEXT_HELP = "AJUDA";
        TEXT_AVAILABLE_COUPLES = "CASAIS DISPONÍVEIS";
        TEXT_SHUFFLE = "EMBARALHAR";
        TEXT_RESTART = "RECOMENÇAR";
        TEXT_RETRY = "TENTA NOVAMENTE";
        TEXT_FINAL_SCORE = "PONTUAÇÃO FINAL";
        TEXT_TIME = "TEMPO";
        TEXT_BONUS_TIME = "TEMO BÔNUS";
        TEXT_BONUS = "BÔNUS";
        TEXT_BONUS_SCORE = "ESCORE BÔNUS";
        TEXT_HELP_1 = "SELECIONE PARES IDÊNTICOS DE PEÇAS LIVRES PARA REMOVÊ-LOS DO LEVEL.";
        TEXT_HELP_2 = "TENTE REMOVER OS CARTÕES DENTRO BÔNUS DE TEMPO PARA OBTER A PONTUAÇÃO MAIS ALTA!";
        TEXT_YES = "SIM";
        TEXT_NO = "NÃO";
        TEXT_TITLE_EXIT_FROM_GAME = "CUIDADO";
        TEXT_MSG_EXIT_FROM_GAME = "VOCÊ QUER SAIR DO JOGO?";
        TEXT_SKIP = "SALTAR";
        TEXT_LOADING = "AGUARDE POR FAVOR ...";
        TEXT_CHOOSE_LAYOUT = "ESCOLHA UM LAYOUT";
        TEXT_DIFF_0 = "FÁCIL";
        TEXT_DIFF_1 = "MÉDIO";
        TEXT_DIFF_2 = "DIFÍCIL ";
        TEXT_CONGRATULATIONS = "PARABÉNS!!!";
        TEXT_NO_MORE_TILES = "NÃO MAIS PEÇAS SELECIONÁVEL";
        TEXT_ERR_CALL_TITLE = "ERRO DE CONEXÃO";
        TEXT_ERR_CALL_MSG = "IMPOSSÍVEL SE CONECTAR AO SERVER PARA EXECUTAR A OPERAÇÃO NECESSÁRIA!";

        TEXT_LAYOUT_CLASSIC = "CLÁSSICO";
        TEXT_LAYOUT_MONUMENT = "MONUMENTO";
        TEXT_LAYOUT_PYRAMIDS = "PIRÂMIDE";
        TEXT_LAYOUT_ARENA = "ARENA";
        TEXT_LAYOUT_FOUR = "QUATRO";
        TEXT_LAYOUT_THE_WALL = "A PAREDE";
       
    };
    
    
    this.refreshLanguage = function(szLang){
        switch(szLang){
            case "de_DE":{
                    this.initLangDE();
                    break;
            }
            case "es_ES":
            case "es_LA":{
                    this.initLangES();
                    break;
            }
            case "fr_CA":
            case "fr_FR":{
                    this.initLangFR();
                    break;
            }
            case "it_IT":{
                    this.initLangITA();
                    break;
            }
            case "nl_NL":{
                    this.initLangNL();
                    break;
            }
            case "pt_BR":
            case "pt_PT":{
                    this.initLangPOR();
                    break;
            }
            default:{
                    this.initLangENG();
            }
        }
    };
    
    this.refreshLanguage(szLang);
    
    return this;
}