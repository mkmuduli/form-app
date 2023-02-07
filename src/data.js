const sampleFormData = [

    {
        "uid": "name11",

        "data_type": "string",

        "label": "Multiple",

        "value": ["test1", 'test2', 'test3'],

        "_metadata": {
            "required": true,
            "multiple": true,
            'field_type': 'dropdown',
            'options': ["test1", 'test2', 'test3']
        }
    },

    {

        "uid": "name10",

        "data_type": "string",

        "label": "first Name",

        "value": "test1",

        "_metadata": {

            "required": true,
            'field_type': 'dropdown',
            'options': ["test1", 'test2', 'test3']

        }
    },

    {

        "uid": "name125",

        "data_type": "string",

        "label": "URL",

        "value": "",
        "_metadata": {

        }


    },

    {

        "uid": "name124",

        "data_type": "string",

        "label": "URL",

        "value": "",
        "_metadata": {
            "required": true,
        }


    },

    {

        "uid": "name",

        "data_type": "string",

        "label": "URL",

        "value": "",
        "_metadata": {

            "is_url": true

        }


    },

    {

        "uid": "name123",

        "data_type": "string",

        "label": "URL",

        "value": [""],
        "_metadata": {

            "is_url": true,
            "multiple": true
        }


    },

    {

        "uid": "name1",

        "data_type": "string",

        "label": "Last Name",

        "value": "test1",

        "_metadata": {

            "required": true

        }

    },

    {

        "uid": "age",

        "data_type": "number",

        "value": "28"

    },

    {

        "uid": "groupuid2",

        "data_type": "group",

        "label": "Group 1",

        "value": [

            {

                "uid": "name",

                "data_type": "string",

                "value": "grptest"

            },

            {

                "uid": "groupUid",

                "data_type": "group",
                "label": "group2",

                "value": [

                    {

                        "uid": "name",

                        "data_type": "string",

                        "value": "grptest1"

                    },

                    {

                        "uid": "age",

                        "data_type": "number",

                        "value": "",
                    }

                ]

            },

            {

                "uid": "age",

                "data_type": "number",

                "value": "28"

            }

        ],
        "_metadata": {
            "required": true
        }

    }

]

export default sampleFormData; 