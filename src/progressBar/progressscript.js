/**
 * Created by Kia on 3/25/2017.
 */

function progressBar(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 1500, "easeOutBack").html(percent + "% ");
}