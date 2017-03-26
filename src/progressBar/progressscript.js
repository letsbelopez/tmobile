/**
 * Created by Kia on 3/25/2017.
 */

function progressBar(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 1500, "easeOutBack").html(percent + "% ");
}

$(function() {
    $(document).ready(function(){
            var _content = `
<h2 class="title">Prgoress Bar</h2>
<br>
<div style="padding-left: 30%;">
    <div>
        <div id="leftid">L</div>
        <div id="progressBar" class="tiny">
            <div></div>
        </div>
        <div id="rightid">R</div>
    </div>
</div>`;
        $('#progress-content').html(_content);
        progresBar(75, $('#progress-content'))
    });
});