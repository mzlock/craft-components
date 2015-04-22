<?php
namespace Craft;

class BustVariable
{
	public function er($file)
	{
		$time = filemtime($_SERVER['DOCUMENT_ROOT'] . $file);
		return $file . '?' . $time;
	}
}