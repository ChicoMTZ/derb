/** 
 * Created by mau on 26/10/16.
 */
$(document).ready(function() {
    //console.log(observation_url);
    //submit_observation();
});

function submit_observation() {
    var data = {
        question_pk: question_pk,
        report_pk: report_pk,
        answer_pk: answer_pk,
        observation: $('#id_text').val()
    };

	$.ajax({
            url: observation_url,
            type: 'POST',
            data: data,
            success: function (response) {
                var div_observation = $('#observations');
                if (div_observation.html().startsWith("<i>")){
                    div_observation.html('');
                }
                div_observation.append(response.content);
            }
    });

}
