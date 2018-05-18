scrollPos = 0;
drilldownOpen = false;

$(document).ready(function() {
		$(".drilldown-toggle").click(function() {
				if(!drilldownOpen) {
						scrollPos = $("html").scrollTop();
						$("html").scrollTop(0);
				}
				$(".container#reader").toggle();
				$(".container#drilldown").toggle();
				drilldownOpen = !drilldownOpen;
				if(!drilldownOpen) {
						$("html").scrollTop(scrollPos);
				}
		});
});

$("#searchModal").on("hidden.bs.modal", function() {
		$("#search-modal-results").hide();
		$("#searchModal input[type='text']").val("");
		$("#searchModal h4").text("");
});

$("#search-modal-button").click(function() {
		$("#search-modal-results").show();
});

$("#searchModal form input[type='text']").on('keypress', function(e) {
		if(e.which === 13) {
				$("#search-modal-results").show();
		}
});

// Run function when Contextual Search button is pressed
$('.container#drilldown #contextual-search-btn').click(function() {
		$('#searchModal h4').text('Search in this book:');
});

$(document).ready(function() {
		$('[data-toggle="tooltip"]').tooltip();
});
