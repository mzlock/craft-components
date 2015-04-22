<?php

namespace Craft;

class BustPlugin extends BasePlugin
{
	public function getName()
	{
		return Craft::t('Cache Bust Files');
	}

	public function getVersion()
	{
		return '1.0';
	}

	public function getDeveloper()
	{
		return 'Trevor Davis';
	}

	public function getDeveloperUrl()
	{
		return 'http://trevordavis.net';
	}
}