using CatalogService as service from '../../srv/cat-service';
annotate service.Tests with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'title',
                Value : title,
            },
            {
                $Type : 'UI.DataField',
                Label : 'description',
                Value : description,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Target : 'questions/@UI.LineItem',
            Label : 'Questions Of Test',
            ID : 'questionSection',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'title',
            Value : title,
        },
        {
            $Type : 'UI.DataField',
            Label : 'description',
            Value : description,
        },
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
    ],
);

annotate service.Questions with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'Question Text',
            Value : text,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Answer',
            Value : answer.text,
        },
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
    ],
);

