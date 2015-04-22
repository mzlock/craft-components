<?php
namespace Craft;

class TruncatePlugin extends BasePlugin
{

	/* --------------------------------------------------------------
	 * PLUGIN INFO
	 * ------------------------------------------------------------ */

	public function getName()
	{
		return Craft::t('Truncate');
	}

	public function getVersion()
	{
		return '0.1';
	}

	public function getDeveloper()
	{
		return 'Chris Ruzin';
	}

	public function getDeveloperUrl()
	{
		return 'http://chrisruzin.net';
	}

	/* --------------------------------------------------------------
	 * HOOKS
	 * ------------------------------------------------------------ */

	/**
	 * Load the TruncateTwigExtension class from our ./twigextensions
	 * directory and return the extension into the template layer
	 */
	public function addTwigExtension()
	{
		Craft::import('plugins.truncate.twigextensions.TruncateTwigExtension');
		return new TruncateTwigExtension();
	}

}
