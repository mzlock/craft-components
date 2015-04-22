<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        'allowAutoUpdates' => false,
        'environmentVariables' => array(
            'env' => 'production'
        ),
        'siteUrl' => array(
            'en_us' => 'http://' . $_SERVER['SERVER_NAME'],
            'es_us' => 'http://' . $_SERVER['SERVER_NAME'] . '/es/'
        )
    ),

    '.dev' => array(
        'allowAutoUpdates' => false,
        'devMode' => true,
        'environmentVariables' => array(
            'env' => 'local'
        ),
        'siteUrl' => array(
            'en_us' => 'http://' . $_SERVER['SERVER_NAME'],
            'es_us' => 'http://' . $_SERVER['SERVER_NAME'] . '/es/'
        )
    )
);