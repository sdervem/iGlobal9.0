$(document).ready(function() {

	$('.notify_error').click(function() {
		 $.notify({
			// options
			icon: 'glyphicon glyphicon-warning-sign',
			title: 'Erro',
			message: 'Descri&ccedil;&atilde;o do Erro, Lorem ipsum dolor sit amet, consectetur cras amet.' 
		},{
			// settings
			type: 'danger'
		});
	});
	
	$('.notify_success').click(function() {
		 $.notify({
			// options
			icon: 'glyphicon glyphicon-ok-sign',
			title: 'Sucesso',
			message: 'Descri&ccedil;&atilde;o do Sucesso, Lorem ipsum dolor sit amet, consectetur cras amet.' 
		},{
			// settings
			type: 'success'
		});
	});
	
	$('.notify_info').click(function() {
		 $.notify({
			// options
			icon: 'glyphicon glyphicon-info-sign',
			title: '',
			message: 'Solicitação realizada com sucesso. Foi enviado ao e-mail cadastrado as instruções de redefinição de senha. Verifique!' 
		},{
			// settings
			type: 'info'
		});
	});
});
