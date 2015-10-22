/**
 * Created by session1 on 10/19/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Percent', 'Number of days',],
        ['2010', 1],
        ['2011', 0],
        ['2012', 1],
        ['2013', 1],
        ['2014', 0]
    ]);

    var options = {
        title: 'Number of Unhealthy Air Days in Utah in June',
        chartArea: {width: '70%'},
        hAxis: {
            title: 'Over Standard Days',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}


google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic2);

function drawBasic2() {

    var data = google.visualization.arrayToDataTable([
        ['Percent', 'Value',],
        ['2010', .075],
        ['2011', .071],
        ['2012', .086],
        ['2013', .075],
        ['2014', .068]
    ]);

    var options = {
        title: 'Number of Unhealthy Air Days in Utah in June',
        chartArea: {width: '70%'},
        hAxis: {
            title: 'Peak values',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart'));

    chart.draw(data, options);
}

            $(document).ready(function() {
                $('Pic1').click(function() {
                   $('Pic1').attr('src', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-R3q-MUTIrr0t1lnlRGYnt6sqJwqH1nxv2AtOyWTTK4wyElEG')
                });
            });