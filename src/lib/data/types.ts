export default {
    "scalars": [
        0,
        1,
        2,
        4,
        6,
        13,
        23,
        31,
        36,
        42,
        51,
        59,
        64,
        70,
        79,
        87,
        102,
        113,
        125,
        133
    ],
    "types": {
        "Boolean": {},
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                2
            ],
            "_gt": [
                2
            ],
            "_gte": [
                2
            ],
            "_in": [
                2
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                2
            ],
            "_lte": [
                2
            ],
            "_neq": [
                2
            ],
            "_nin": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                4
            ],
            "_gt": [
                4
            ],
            "_gte": [
                4
            ],
            "_ilike": [
                4
            ],
            "_in": [
                4
            ],
            "_iregex": [
                4
            ],
            "_is_null": [
                0
            ],
            "_like": [
                4
            ],
            "_lt": [
                4
            ],
            "_lte": [
                4
            ],
            "_neq": [
                4
            ],
            "_nilike": [
                4
            ],
            "_nin": [
                4
            ],
            "_niregex": [
                4
            ],
            "_nlike": [
                4
            ],
            "_nregex": [
                4
            ],
            "_nsimilar": [
                4
            ],
            "_regex": [
                4
            ],
            "_similar": [
                4
            ],
            "__typename": [
                4
            ]
        },
        "bigint": {},
        "bigint_comparison_exp": {
            "_eq": [
                6
            ],
            "_gt": [
                6
            ],
            "_gte": [
                6
            ],
            "_in": [
                6
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                6
            ],
            "_lte": [
                6
            ],
            "_neq": [
                6
            ],
            "_nin": [
                6
            ],
            "__typename": [
                4
            ]
        },
        "companies": {
            "ceo": [
                4
            ],
            "created_at": [
                133
            ],
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "products": [
                92,
                {
                    "distinct_on": [
                        113,
                        "[products_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        111,
                        "[products_order_by!]"
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "products_aggregate": [
                93,
                {
                    "distinct_on": [
                        113,
                        "[products_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        111,
                        "[products_order_by!]"
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "type": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "companies_aggregate": {
            "aggregate": [
                10
            ],
            "nodes": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "companies_aggregate_fields": {
            "avg": [
                11
            ],
            "count": [
                2,
                {
                    "columns": [
                        23,
                        "[companies_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                16
            ],
            "min": [
                17
            ],
            "stddev": [
                25
            ],
            "stddev_pop": [
                26
            ],
            "stddev_samp": [
                27
            ],
            "sum": [
                30
            ],
            "var_pop": [
                33
            ],
            "var_samp": [
                34
            ],
            "variance": [
                35
            ],
            "__typename": [
                4
            ]
        },
        "companies_avg_fields": {
            "founded_year": [
                1
            ],
            "id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "companies_bool_exp": {
            "_and": [
                12
            ],
            "_not": [
                12
            ],
            "_or": [
                12
            ],
            "ceo": [
                5
            ],
            "created_at": [
                134
            ],
            "founded_year": [
                3
            ],
            "id": [
                3
            ],
            "name": [
                5
            ],
            "products": [
                101
            ],
            "products_aggregate": [
                94
            ],
            "type": [
                5
            ],
            "updated_at": [
                134
            ],
            "__typename": [
                4
            ]
        },
        "companies_constraint": {},
        "companies_inc_input": {
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "companies_insert_input": {
            "ceo": [
                4
            ],
            "created_at": [
                133
            ],
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "products": [
                98
            ],
            "type": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "companies_max_fields": {
            "ceo": [
                4
            ],
            "created_at": [
                133
            ],
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "type": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "companies_min_fields": {
            "ceo": [
                4
            ],
            "created_at": [
                133
            ],
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "type": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "companies_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                8
            ],
            "__typename": [
                4
            ]
        },
        "companies_obj_rel_insert_input": {
            "data": [
                15
            ],
            "on_conflict": [
                20
            ],
            "__typename": [
                4
            ]
        },
        "companies_on_conflict": {
            "constraint": [
                13
            ],
            "update_columns": [
                31
            ],
            "where": [
                12
            ],
            "__typename": [
                4
            ]
        },
        "companies_order_by": {
            "ceo": [
                64
            ],
            "created_at": [
                64
            ],
            "founded_year": [
                64
            ],
            "id": [
                64
            ],
            "name": [
                64
            ],
            "products_aggregate": [
                97
            ],
            "type": [
                64
            ],
            "updated_at": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "companies_pk_columns_input": {
            "id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "companies_select_column": {},
        "companies_set_input": {
            "ceo": [
                4
            ],
            "created_at": [
                133
            ],
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "type": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "companies_stddev_fields": {
            "founded_year": [
                1
            ],
            "id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "companies_stddev_pop_fields": {
            "founded_year": [
                1
            ],
            "id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "companies_stddev_samp_fields": {
            "founded_year": [
                1
            ],
            "id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "companies_stream_cursor_input": {
            "initial_value": [
                29
            ],
            "ordering": [
                36
            ],
            "__typename": [
                4
            ]
        },
        "companies_stream_cursor_value_input": {
            "ceo": [
                4
            ],
            "created_at": [
                133
            ],
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "type": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "companies_sum_fields": {
            "founded_year": [
                2
            ],
            "id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "companies_update_column": {},
        "companies_updates": {
            "_inc": [
                14
            ],
            "_set": [
                24
            ],
            "where": [
                12
            ],
            "__typename": [
                4
            ]
        },
        "companies_var_pop_fields": {
            "founded_year": [
                1
            ],
            "id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "companies_var_samp_fields": {
            "founded_year": [
                1
            ],
            "id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "companies_variance_fields": {
            "founded_year": [
                1
            ],
            "id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "cursor_ordering": {},
        "moons": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "planet_id": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "moons_aggregate": {
            "aggregate": [
                39
            ],
            "nodes": [
                37
            ],
            "__typename": [
                4
            ]
        },
        "moons_aggregate_fields": {
            "avg": [
                40
            ],
            "count": [
                2,
                {
                    "columns": [
                        51,
                        "[moons_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                45
            ],
            "min": [
                46
            ],
            "stddev": [
                53
            ],
            "stddev_pop": [
                54
            ],
            "stddev_samp": [
                55
            ],
            "sum": [
                58
            ],
            "var_pop": [
                61
            ],
            "var_samp": [
                62
            ],
            "variance": [
                63
            ],
            "__typename": [
                4
            ]
        },
        "moons_avg_fields": {
            "id": [
                1
            ],
            "planet_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "moons_bool_exp": {
            "_and": [
                41
            ],
            "_not": [
                41
            ],
            "_or": [
                41
            ],
            "created_at": [
                134
            ],
            "id": [
                3
            ],
            "name": [
                5
            ],
            "planet_id": [
                3
            ],
            "updated_at": [
                134
            ],
            "__typename": [
                4
            ]
        },
        "moons_constraint": {},
        "moons_inc_input": {
            "id": [
                2
            ],
            "planet_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "moons_insert_input": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "planet_id": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "moons_max_fields": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "planet_id": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "moons_min_fields": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "planet_id": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "moons_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                37
            ],
            "__typename": [
                4
            ]
        },
        "moons_on_conflict": {
            "constraint": [
                42
            ],
            "update_columns": [
                59
            ],
            "where": [
                41
            ],
            "__typename": [
                4
            ]
        },
        "moons_order_by": {
            "created_at": [
                64
            ],
            "id": [
                64
            ],
            "name": [
                64
            ],
            "planet_id": [
                64
            ],
            "updated_at": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "moons_pk_columns_input": {
            "id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "moons_select_column": {},
        "moons_set_input": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "planet_id": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "moons_stddev_fields": {
            "id": [
                1
            ],
            "planet_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "moons_stddev_pop_fields": {
            "id": [
                1
            ],
            "planet_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "moons_stddev_samp_fields": {
            "id": [
                1
            ],
            "planet_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "moons_stream_cursor_input": {
            "initial_value": [
                57
            ],
            "ordering": [
                36
            ],
            "__typename": [
                4
            ]
        },
        "moons_stream_cursor_value_input": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "planet_id": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "moons_sum_fields": {
            "id": [
                2
            ],
            "planet_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "moons_update_column": {},
        "moons_updates": {
            "_inc": [
                43
            ],
            "_set": [
                52
            ],
            "where": [
                41
            ],
            "__typename": [
                4
            ]
        },
        "moons_var_pop_fields": {
            "id": [
                1
            ],
            "planet_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "moons_var_samp_fields": {
            "id": [
                1
            ],
            "planet_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "moons_variance_fields": {
            "id": [
                1
            ],
            "planet_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "order_by": {},
        "planets": {
            "created_at": [
                133
            ],
            "geology_content": [
                4
            ],
            "geology_source": [
                4
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "overview_content": [
                4
            ],
            "overview_source": [
                4
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "structure_content": [
                4
            ],
            "structure_source": [
                4
            ],
            "temperature": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "planets_aggregate": {
            "aggregate": [
                67
            ],
            "nodes": [
                65
            ],
            "__typename": [
                4
            ]
        },
        "planets_aggregate_fields": {
            "avg": [
                68
            ],
            "count": [
                2,
                {
                    "columns": [
                        79,
                        "[planets_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                73
            ],
            "min": [
                74
            ],
            "stddev": [
                81
            ],
            "stddev_pop": [
                82
            ],
            "stddev_samp": [
                83
            ],
            "sum": [
                86
            ],
            "var_pop": [
                89
            ],
            "var_samp": [
                90
            ],
            "variance": [
                91
            ],
            "__typename": [
                4
            ]
        },
        "planets_avg_fields": {
            "id": [
                1
            ],
            "radius": [
                1
            ],
            "revolution": [
                1
            ],
            "rotation": [
                1
            ],
            "temperature": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "planets_bool_exp": {
            "_and": [
                69
            ],
            "_not": [
                69
            ],
            "_or": [
                69
            ],
            "created_at": [
                134
            ],
            "geology_content": [
                5
            ],
            "geology_source": [
                5
            ],
            "id": [
                3
            ],
            "name": [
                5
            ],
            "overview_content": [
                5
            ],
            "overview_source": [
                5
            ],
            "radius": [
                7
            ],
            "revolution": [
                7
            ],
            "rotation": [
                7
            ],
            "structure_content": [
                5
            ],
            "structure_source": [
                5
            ],
            "temperature": [
                3
            ],
            "updated_at": [
                134
            ],
            "__typename": [
                4
            ]
        },
        "planets_constraint": {},
        "planets_inc_input": {
            "id": [
                2
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "temperature": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "planets_insert_input": {
            "created_at": [
                133
            ],
            "geology_content": [
                4
            ],
            "geology_source": [
                4
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "overview_content": [
                4
            ],
            "overview_source": [
                4
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "structure_content": [
                4
            ],
            "structure_source": [
                4
            ],
            "temperature": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "planets_max_fields": {
            "created_at": [
                133
            ],
            "geology_content": [
                4
            ],
            "geology_source": [
                4
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "overview_content": [
                4
            ],
            "overview_source": [
                4
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "structure_content": [
                4
            ],
            "structure_source": [
                4
            ],
            "temperature": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "planets_min_fields": {
            "created_at": [
                133
            ],
            "geology_content": [
                4
            ],
            "geology_source": [
                4
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "overview_content": [
                4
            ],
            "overview_source": [
                4
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "structure_content": [
                4
            ],
            "structure_source": [
                4
            ],
            "temperature": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "planets_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                65
            ],
            "__typename": [
                4
            ]
        },
        "planets_on_conflict": {
            "constraint": [
                70
            ],
            "update_columns": [
                87
            ],
            "where": [
                69
            ],
            "__typename": [
                4
            ]
        },
        "planets_order_by": {
            "created_at": [
                64
            ],
            "geology_content": [
                64
            ],
            "geology_source": [
                64
            ],
            "id": [
                64
            ],
            "name": [
                64
            ],
            "overview_content": [
                64
            ],
            "overview_source": [
                64
            ],
            "radius": [
                64
            ],
            "revolution": [
                64
            ],
            "rotation": [
                64
            ],
            "structure_content": [
                64
            ],
            "structure_source": [
                64
            ],
            "temperature": [
                64
            ],
            "updated_at": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "planets_pk_columns_input": {
            "id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "planets_select_column": {},
        "planets_set_input": {
            "created_at": [
                133
            ],
            "geology_content": [
                4
            ],
            "geology_source": [
                4
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "overview_content": [
                4
            ],
            "overview_source": [
                4
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "structure_content": [
                4
            ],
            "structure_source": [
                4
            ],
            "temperature": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "planets_stddev_fields": {
            "id": [
                1
            ],
            "radius": [
                1
            ],
            "revolution": [
                1
            ],
            "rotation": [
                1
            ],
            "temperature": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "planets_stddev_pop_fields": {
            "id": [
                1
            ],
            "radius": [
                1
            ],
            "revolution": [
                1
            ],
            "rotation": [
                1
            ],
            "temperature": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "planets_stddev_samp_fields": {
            "id": [
                1
            ],
            "radius": [
                1
            ],
            "revolution": [
                1
            ],
            "rotation": [
                1
            ],
            "temperature": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "planets_stream_cursor_input": {
            "initial_value": [
                85
            ],
            "ordering": [
                36
            ],
            "__typename": [
                4
            ]
        },
        "planets_stream_cursor_value_input": {
            "created_at": [
                133
            ],
            "geology_content": [
                4
            ],
            "geology_source": [
                4
            ],
            "id": [
                2
            ],
            "name": [
                4
            ],
            "overview_content": [
                4
            ],
            "overview_source": [
                4
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "structure_content": [
                4
            ],
            "structure_source": [
                4
            ],
            "temperature": [
                2
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "planets_sum_fields": {
            "id": [
                2
            ],
            "radius": [
                6
            ],
            "revolution": [
                6
            ],
            "rotation": [
                6
            ],
            "temperature": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "planets_update_column": {},
        "planets_updates": {
            "_inc": [
                71
            ],
            "_set": [
                80
            ],
            "where": [
                69
            ],
            "__typename": [
                4
            ]
        },
        "planets_var_pop_fields": {
            "id": [
                1
            ],
            "radius": [
                1
            ],
            "revolution": [
                1
            ],
            "rotation": [
                1
            ],
            "temperature": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "planets_var_samp_fields": {
            "id": [
                1
            ],
            "radius": [
                1
            ],
            "revolution": [
                1
            ],
            "rotation": [
                1
            ],
            "temperature": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "planets_variance_fields": {
            "id": [
                1
            ],
            "radius": [
                1
            ],
            "revolution": [
                1
            ],
            "rotation": [
                1
            ],
            "temperature": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products": {
            "company": [
                8
            ],
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "name": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "products_aggregate": {
            "aggregate": [
                96
            ],
            "nodes": [
                92
            ],
            "__typename": [
                4
            ]
        },
        "products_aggregate_bool_exp": {
            "count": [
                95
            ],
            "__typename": [
                4
            ]
        },
        "products_aggregate_bool_exp_count": {
            "arguments": [
                113
            ],
            "distinct": [
                0
            ],
            "filter": [
                101
            ],
            "predicate": [
                3
            ],
            "__typename": [
                4
            ]
        },
        "products_aggregate_fields": {
            "avg": [
                99
            ],
            "count": [
                2,
                {
                    "columns": [
                        113,
                        "[products_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                105
            ],
            "min": [
                107
            ],
            "stddev": [
                115
            ],
            "stddev_pop": [
                117
            ],
            "stddev_samp": [
                119
            ],
            "sum": [
                123
            ],
            "var_pop": [
                127
            ],
            "var_samp": [
                129
            ],
            "variance": [
                131
            ],
            "__typename": [
                4
            ]
        },
        "products_aggregate_order_by": {
            "avg": [
                100
            ],
            "count": [
                64
            ],
            "max": [
                106
            ],
            "min": [
                108
            ],
            "stddev": [
                116
            ],
            "stddev_pop": [
                118
            ],
            "stddev_samp": [
                120
            ],
            "sum": [
                124
            ],
            "var_pop": [
                128
            ],
            "var_samp": [
                130
            ],
            "variance": [
                132
            ],
            "__typename": [
                4
            ]
        },
        "products_arr_rel_insert_input": {
            "data": [
                104
            ],
            "on_conflict": [
                110
            ],
            "__typename": [
                4
            ]
        },
        "products_avg_fields": {
            "id": [
                1
            ],
            "manufacturer_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products_avg_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_bool_exp": {
            "_and": [
                101
            ],
            "_not": [
                101
            ],
            "_or": [
                101
            ],
            "company": [
                12
            ],
            "created_at": [
                134
            ],
            "id": [
                3
            ],
            "manufacturer_id": [
                3
            ],
            "name": [
                5
            ],
            "updated_at": [
                134
            ],
            "__typename": [
                4
            ]
        },
        "products_constraint": {},
        "products_inc_input": {
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "products_insert_input": {
            "company": [
                19
            ],
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "name": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "products_max_fields": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "name": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "products_max_order_by": {
            "created_at": [
                64
            ],
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "name": [
                64
            ],
            "updated_at": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_min_fields": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "name": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "products_min_order_by": {
            "created_at": [
                64
            ],
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "name": [
                64
            ],
            "updated_at": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_mutation_response": {
            "affected_rows": [
                2
            ],
            "returning": [
                92
            ],
            "__typename": [
                4
            ]
        },
        "products_on_conflict": {
            "constraint": [
                102
            ],
            "update_columns": [
                125
            ],
            "where": [
                101
            ],
            "__typename": [
                4
            ]
        },
        "products_order_by": {
            "company": [
                21
            ],
            "created_at": [
                64
            ],
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "name": [
                64
            ],
            "updated_at": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_pk_columns_input": {
            "id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "products_select_column": {},
        "products_set_input": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "name": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "products_stddev_fields": {
            "id": [
                1
            ],
            "manufacturer_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products_stddev_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_stddev_pop_fields": {
            "id": [
                1
            ],
            "manufacturer_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products_stddev_pop_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_stddev_samp_fields": {
            "id": [
                1
            ],
            "manufacturer_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products_stddev_samp_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_stream_cursor_input": {
            "initial_value": [
                122
            ],
            "ordering": [
                36
            ],
            "__typename": [
                4
            ]
        },
        "products_stream_cursor_value_input": {
            "created_at": [
                133
            ],
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "name": [
                4
            ],
            "updated_at": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "products_sum_fields": {
            "id": [
                2
            ],
            "manufacturer_id": [
                2
            ],
            "__typename": [
                4
            ]
        },
        "products_sum_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_update_column": {},
        "products_updates": {
            "_inc": [
                103
            ],
            "_set": [
                114
            ],
            "where": [
                101
            ],
            "__typename": [
                4
            ]
        },
        "products_var_pop_fields": {
            "id": [
                1
            ],
            "manufacturer_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products_var_pop_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_var_samp_fields": {
            "id": [
                1
            ],
            "manufacturer_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products_var_samp_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "products_variance_fields": {
            "id": [
                1
            ],
            "manufacturer_id": [
                1
            ],
            "__typename": [
                4
            ]
        },
        "products_variance_order_by": {
            "id": [
                64
            ],
            "manufacturer_id": [
                64
            ],
            "__typename": [
                4
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                133
            ],
            "_gt": [
                133
            ],
            "_gte": [
                133
            ],
            "_in": [
                133
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                133
            ],
            "_lte": [
                133
            ],
            "_neq": [
                133
            ],
            "_nin": [
                133
            ],
            "__typename": [
                4
            ]
        },
        "Query": {
            "companies": [
                8,
                {
                    "distinct_on": [
                        23,
                        "[companies_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        21,
                        "[companies_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "companies_aggregate": [
                9,
                {
                    "distinct_on": [
                        23,
                        "[companies_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        21,
                        "[companies_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "companies_by_pk": [
                8,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "moons": [
                37,
                {
                    "distinct_on": [
                        51,
                        "[moons_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[moons_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "moons_aggregate": [
                38,
                {
                    "distinct_on": [
                        51,
                        "[moons_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[moons_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "moons_by_pk": [
                37,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "planets": [
                65,
                {
                    "distinct_on": [
                        79,
                        "[planets_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        77,
                        "[planets_order_by!]"
                    ],
                    "where": [
                        69
                    ]
                }
            ],
            "planets_aggregate": [
                66,
                {
                    "distinct_on": [
                        79,
                        "[planets_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        77,
                        "[planets_order_by!]"
                    ],
                    "where": [
                        69
                    ]
                }
            ],
            "planets_by_pk": [
                65,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "products": [
                92,
                {
                    "distinct_on": [
                        113,
                        "[products_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        111,
                        "[products_order_by!]"
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "products_aggregate": [
                93,
                {
                    "distinct_on": [
                        113,
                        "[products_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        111,
                        "[products_order_by!]"
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "products_by_pk": [
                92,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Mutation": {
            "delete_companies": [
                18,
                {
                    "where": [
                        12,
                        "companies_bool_exp!"
                    ]
                }
            ],
            "delete_companies_by_pk": [
                8,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "delete_moons": [
                47,
                {
                    "where": [
                        41,
                        "moons_bool_exp!"
                    ]
                }
            ],
            "delete_moons_by_pk": [
                37,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "delete_planets": [
                75,
                {
                    "where": [
                        69,
                        "planets_bool_exp!"
                    ]
                }
            ],
            "delete_planets_by_pk": [
                65,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "delete_products": [
                109,
                {
                    "where": [
                        101,
                        "products_bool_exp!"
                    ]
                }
            ],
            "delete_products_by_pk": [
                92,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "insert_companies": [
                18,
                {
                    "objects": [
                        15,
                        "[companies_insert_input!]!"
                    ],
                    "on_conflict": [
                        20
                    ]
                }
            ],
            "insert_companies_one": [
                8,
                {
                    "object": [
                        15,
                        "companies_insert_input!"
                    ],
                    "on_conflict": [
                        20
                    ]
                }
            ],
            "insert_moons": [
                47,
                {
                    "objects": [
                        44,
                        "[moons_insert_input!]!"
                    ],
                    "on_conflict": [
                        48
                    ]
                }
            ],
            "insert_moons_one": [
                37,
                {
                    "object": [
                        44,
                        "moons_insert_input!"
                    ],
                    "on_conflict": [
                        48
                    ]
                }
            ],
            "insert_planets": [
                75,
                {
                    "objects": [
                        72,
                        "[planets_insert_input!]!"
                    ],
                    "on_conflict": [
                        76
                    ]
                }
            ],
            "insert_planets_one": [
                65,
                {
                    "object": [
                        72,
                        "planets_insert_input!"
                    ],
                    "on_conflict": [
                        76
                    ]
                }
            ],
            "insert_products": [
                109,
                {
                    "objects": [
                        104,
                        "[products_insert_input!]!"
                    ],
                    "on_conflict": [
                        110
                    ]
                }
            ],
            "insert_products_one": [
                92,
                {
                    "object": [
                        104,
                        "products_insert_input!"
                    ],
                    "on_conflict": [
                        110
                    ]
                }
            ],
            "update_companies": [
                18,
                {
                    "_inc": [
                        14
                    ],
                    "_set": [
                        24
                    ],
                    "where": [
                        12,
                        "companies_bool_exp!"
                    ]
                }
            ],
            "update_companies_by_pk": [
                8,
                {
                    "_inc": [
                        14
                    ],
                    "_set": [
                        24
                    ],
                    "pk_columns": [
                        22,
                        "companies_pk_columns_input!"
                    ]
                }
            ],
            "update_companies_many": [
                18,
                {
                    "updates": [
                        32,
                        "[companies_updates!]!"
                    ]
                }
            ],
            "update_moons": [
                47,
                {
                    "_inc": [
                        43
                    ],
                    "_set": [
                        52
                    ],
                    "where": [
                        41,
                        "moons_bool_exp!"
                    ]
                }
            ],
            "update_moons_by_pk": [
                37,
                {
                    "_inc": [
                        43
                    ],
                    "_set": [
                        52
                    ],
                    "pk_columns": [
                        50,
                        "moons_pk_columns_input!"
                    ]
                }
            ],
            "update_moons_many": [
                47,
                {
                    "updates": [
                        60,
                        "[moons_updates!]!"
                    ]
                }
            ],
            "update_planets": [
                75,
                {
                    "_inc": [
                        71
                    ],
                    "_set": [
                        80
                    ],
                    "where": [
                        69,
                        "planets_bool_exp!"
                    ]
                }
            ],
            "update_planets_by_pk": [
                65,
                {
                    "_inc": [
                        71
                    ],
                    "_set": [
                        80
                    ],
                    "pk_columns": [
                        78,
                        "planets_pk_columns_input!"
                    ]
                }
            ],
            "update_planets_many": [
                75,
                {
                    "updates": [
                        88,
                        "[planets_updates!]!"
                    ]
                }
            ],
            "update_products": [
                109,
                {
                    "_inc": [
                        103
                    ],
                    "_set": [
                        114
                    ],
                    "where": [
                        101,
                        "products_bool_exp!"
                    ]
                }
            ],
            "update_products_by_pk": [
                92,
                {
                    "_inc": [
                        103
                    ],
                    "_set": [
                        114
                    ],
                    "pk_columns": [
                        112,
                        "products_pk_columns_input!"
                    ]
                }
            ],
            "update_products_many": [
                109,
                {
                    "updates": [
                        126,
                        "[products_updates!]!"
                    ]
                }
            ],
            "__typename": [
                4
            ]
        },
        "Subscription": {
            "companies": [
                8,
                {
                    "distinct_on": [
                        23,
                        "[companies_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        21,
                        "[companies_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "companies_aggregate": [
                9,
                {
                    "distinct_on": [
                        23,
                        "[companies_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        21,
                        "[companies_order_by!]"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "companies_by_pk": [
                8,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "companies_stream": [
                8,
                {
                    "batch_size": [
                        2,
                        "Int!"
                    ],
                    "cursor": [
                        28,
                        "[companies_stream_cursor_input]!"
                    ],
                    "where": [
                        12
                    ]
                }
            ],
            "moons": [
                37,
                {
                    "distinct_on": [
                        51,
                        "[moons_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[moons_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "moons_aggregate": [
                38,
                {
                    "distinct_on": [
                        51,
                        "[moons_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        49,
                        "[moons_order_by!]"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "moons_by_pk": [
                37,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "moons_stream": [
                37,
                {
                    "batch_size": [
                        2,
                        "Int!"
                    ],
                    "cursor": [
                        56,
                        "[moons_stream_cursor_input]!"
                    ],
                    "where": [
                        41
                    ]
                }
            ],
            "planets": [
                65,
                {
                    "distinct_on": [
                        79,
                        "[planets_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        77,
                        "[planets_order_by!]"
                    ],
                    "where": [
                        69
                    ]
                }
            ],
            "planets_aggregate": [
                66,
                {
                    "distinct_on": [
                        79,
                        "[planets_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        77,
                        "[planets_order_by!]"
                    ],
                    "where": [
                        69
                    ]
                }
            ],
            "planets_by_pk": [
                65,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "planets_stream": [
                65,
                {
                    "batch_size": [
                        2,
                        "Int!"
                    ],
                    "cursor": [
                        84,
                        "[planets_stream_cursor_input]!"
                    ],
                    "where": [
                        69
                    ]
                }
            ],
            "products": [
                92,
                {
                    "distinct_on": [
                        113,
                        "[products_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        111,
                        "[products_order_by!]"
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "products_aggregate": [
                93,
                {
                    "distinct_on": [
                        113,
                        "[products_select_column!]"
                    ],
                    "limit": [
                        2
                    ],
                    "offset": [
                        2
                    ],
                    "order_by": [
                        111,
                        "[products_order_by!]"
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "products_by_pk": [
                92,
                {
                    "id": [
                        2,
                        "Int!"
                    ]
                }
            ],
            "products_stream": [
                92,
                {
                    "batch_size": [
                        2,
                        "Int!"
                    ],
                    "cursor": [
                        121,
                        "[products_stream_cursor_input]!"
                    ],
                    "where": [
                        101
                    ]
                }
            ],
            "__typename": [
                4
            ]
        }
    }
}