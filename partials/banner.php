<?php
include_once 'app/includes/helpers.php';

$banner_top_text = app_get_localized_string( 'banner_top_text' );
?>

<div class="top-banner">
	<div class="shell">
		<div class="top-banner__content">
			<h3>
				<?php echo $banner_top_text; ?>
			</h3>
		</div><!-- /.top-banner__content -->
	</div><!-- /.shell -->
</div><!-- /.top-banner -->
