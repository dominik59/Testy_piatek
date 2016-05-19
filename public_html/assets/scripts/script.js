var young_nr_of_question = 0;
var old_nr_of_question = 0;
var total_number_of_young_question=0;
var total_number_of_old_question=0;
var young_points=0;
var old_points=0;

var young_question = []; //= [["1.Po wyłączeniu komputera wymazuje się zawartość:", "pamięci RAM", "pamięci ROM", "pamięci zewnętrznej", "dyskietki"], ["2. Najmniejszą jednostką informacji jest:", "1 bajt", "1 znak", "1 bit", "1 plik"], ["3. dysk twardy to rodzaj:", "pamięci wewnętrznej", "pamięci operacyjnej", "ulotnej pamięci zewnętrznej", "pamięci zewnętrznej"], ["4. Folderem w systemie Windows nazywamy:", "obrazek zapisany na dysku twardym.", "	miejsce na dysku do zapisywania plików lub innych folderów.", "	część sytemu operacyjnego.", "urządzenie wejściowe komputera."]];
var old_question = [];//[["1.Po wyłączeniu komputera wymazuje się zawartość:", "pamięci RAM", "pamięci ROM", "pamięci zewnętrznej", "dyskietki"], ["2. Najmniejszą jednostką informacji jest:", "1 bajt", "1 znak", "1 bit", "1 plik"], ["3. dysk twardy to rodzaj:", "pamięci wewnętrznej", "pamięci operacyjnej", "ulotnej pamięci zewnętrznej", "pamięci zewnętrznej"], ["4. Folderem w systemie Windows nazywamy:", "obrazek zapisany na dysku twardym.", "	miejsce na dysku do zapisywania plików lub innych folderów.", "	część sytemu operacyjnego.", "urządzenie wejściowe komputera."]];

function back_to_main_page()
{
    document.location.href = "index.html";
}

function clear_the_young_counter()
    {
        $('#second_young_block').hide();
        young_nr_of_question = 0;
        young_points=0;
    }
function clear_the_old_counter()
{
    $('#second_old_block').hide();
    old_nr_of_question = 0;
    young_points=0;
}
function load_next_young_question()
{
    document.getElementById('young_question_text').innerHTML = young_question[young_nr_of_question][0];
    document.getElementById('young_answear_1').innerHTML = young_question[young_nr_of_question][1];
    document.getElementById('young_answear_2').innerHTML = young_question[young_nr_of_question][2];
    document.getElementById('young_answear_3').innerHTML = young_question[young_nr_of_question][3];
    document.getElementById('young_answear_4').innerHTML = young_question[young_nr_of_question][4];
    document.getElementById('young_radio1').checked = false;
    document.getElementById('young_radio2').checked = false;
    document.getElementById('young_radio3').checked = false;
    document.getElementById('young_radio4').checked = false;    
    if (young_nr_of_question == total_number_of_young_question-1)
    {
        document.getElementById('young_next_question').firstChild.data="Zatwierdź i zakończ test";
        document.getElementById('young_next_question').setAttribute( "onClick", "check_young_question();" );
        //young_nr_of_question = 0;
    }
    
}

function send_young_to_base()
{
    var punkty=0;
    if(young_points!=0)
    {
        punkty = young_points;
    }
    else
    {
        punkty = old_points;
    }
    alert(document.getElementById('young_name').value);
    $.ajax({
        type:"POST",
        url: 'assets/scripts/send_to_base.php', //the script to call to get data          
        data: {imie: document.getElementById('young_name').value, kontakt: document.getElementById('young_contact').value, punkty:punkty},
        //you can insert url argumnets here to pass to api.php
        //for example "id=5&parent=6"
        dataType: 'json', //data format      
        success: function(data)          //on recieve of reply
        {
            alert("Pomyślnie wysłano! Po zakończonym konkursie skontaktujemy się ze zwycięzcami");
        }

    });
}

function send_old_to_base()
{
    var punkty=0;
    if(young_points!=0)
    {
        punkty = young_points;
    }
    else
    {
        punkty = old_points;
    }
    alert(document.getElementById('old_name').value);
    $.ajax({
        type:"POST",
        url: 'assets/scripts/send_to_base2.php', //the script to call to get data          
        data: {imie: document.getElementById('old_name').value, kontakt: document.getElementById('old_contact').value, punkty:punkty},
        //you can insert url argumnets here to pass to api.php
        //for example "id=5&parent=6"
        dataType: 'json', //data format      
        success: function(data)          //on recieve of reply
        {
            alert("Pomyślnie wysłano! Po zakończonym konkursie skontaktujemy się ze zwycięzcami");
        }

    });
}

function name_and_phone_page_creation()
{
    //alert("Page creation");
    $('#first_young_block').hide(200);
    $('#second_young_block').show(200);
    $('#first_old_block').hide(200);
    $('#second_old_block').show(200);
}

function check_young_question()
{
     if (document.getElementById('young_radio1').checked || document.getElementById('young_radio2').checked || document.getElementById('young_radio3').checked || document.getElementById('young_radio4').checked)
    {
        if(document.getElementById('young_radio1').checked&&young_question[young_nr_of_question][5]==0)
        {
            young_points++;
        }
        else if(document.getElementById('young_radio2').checked&&young_question[young_nr_of_question][5]==1)
        {
            young_points++;
        }
        else if(document.getElementById('young_radio3').checked&&young_question[young_nr_of_question][5]==2)
        {
            young_points++;
        }
        else if(document.getElementById('young_radio4').checked&&young_question[young_nr_of_question][5]==3)
        {
            young_points++;
        }
        //alert(young_points);
        if (young_nr_of_question == total_number_of_young_question-1)
        {
            //alert(young_points);
            name_and_phone_page_creation();
        }
        else
        {
            young_nr_of_question++; 
            load_next_young_question();
        }
        
    }
    else
    {
        alert("Proszę zaznaczyć odpowiedź!");
    }
}

function load_next_old_question()
{
    document.getElementById('old_question_text').innerHTML = old_question[old_nr_of_question][0];
    document.getElementById('old_answear_1').innerHTML = old_question[old_nr_of_question][1];
    document.getElementById('old_answear_2').innerHTML = old_question[old_nr_of_question][2];
    document.getElementById('old_answear_3').innerHTML = old_question[old_nr_of_question][3];
    document.getElementById('old_answear_4').innerHTML = old_question[old_nr_of_question][4];
    document.getElementById('old_radio1').checked = false;
    document.getElementById('old_radio2').checked = false;
    document.getElementById('old_radio3').checked = false;
    document.getElementById('old_radio4').checked = false;       
    if (old_nr_of_question == total_number_of_old_question-1)
    {
        document.getElementById('old_next_question').firstChild.data="Zatwierdź i zakończ test";
        document.getElementById('old_next_question').setAttribute( "onClick", "check_old_question();" );
        //old_nr_of_question = 0;
    }
    
}

function check_old_question()
{
    if (document.getElementById('old_radio1').checked || document.getElementById('old_radio2').checked || document.getElementById('old_radio3').checked || document.getElementById('old_radio4').checked)
    {
        if(document.getElementById('old_radio1').checked&&old_question[old_nr_of_question][5]==0)
        {
            old_points++;
        }
        else if(document.getElementById('old_radio2').checked&&old_question[old_nr_of_question][5]==1)
        {
            old_points++;
        }
        else if(document.getElementById('old_radio3').checked&&old_question[old_nr_of_question][5]==2)
        {
            old_points++;
        }
        else if(document.getElementById('old_radio4').checked&&old_question[old_nr_of_question][5]==3)
        {
            old_points++;
        }
        if (old_nr_of_question == total_number_of_old_question-1)
        {
            alert(old_points);
            name_and_phone_page_creation();
        }
        else
        {
            old_nr_of_question++; 
            load_next_old_question();
        }
        
        
    }
    else
    {
        alert("Proszę zaznaczyć odpowiedź!");
    }
}

function load_young_question_from_base()
{
    $.ajax({
        type:"POST",
        url: 'assets/scripts/receive_young_questions.php', //the script to call to get data          
        //data: {mode: "2"},
        //you can insert url argumnets here to pass to api.php
        //for example "id=5&parent=6"
        dataType: 'json', //data format      
        success: function(data)          //on recieve of reply
        {
            for (var i = 0; i < data.length; i++)
            {
                //alert(data[i]);
                young_question.push(data[i]);
                //alert(young_question[0]);
            }
            
            total_number_of_young_question=data.length;            
            load_next_young_question();
        }

    });
};

function load_old_question_from_base()
{
    $.ajax({
        type:"POST",
        url: 'assets/scripts/receive_old_questions.php', //the script to call to get data          
        //data: {mode: "2"},
        //you can insert url argumnets here to pass to api.php
        //for example "id=5&parent=6"
        dataType: 'json', //data format      
        success: function(data)          //on recieve of reply
        {
            for (var i = 0; i < data.length; i++)
            {
                //alert(data[i]);
                old_question.push(data[i]);
                //alert(young_question[0]);
            }
            
            total_number_of_old_question=data.length;
            load_next_old_question();
        }

    });
};
