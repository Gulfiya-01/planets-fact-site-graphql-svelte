// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    bigint: any,
    timestamptz: any,
}


/** columns and relationships of "companies" */
export interface companies {
    ceo: (Scalars['String'] | null)
    created_at: Scalars['timestamptz']
    founded_year: Scalars['Int']
    id: Scalars['Int']
    name: Scalars['String']
    /** An array relationship */
    products: products[]
    /** An aggregate relationship */
    products_aggregate: products_aggregate
    type: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'companies'
}


/** aggregated selection of "companies" */
export interface companies_aggregate {
    aggregate: (companies_aggregate_fields | null)
    nodes: companies[]
    __typename: 'companies_aggregate'
}


/** aggregate fields of "companies" */
export interface companies_aggregate_fields {
    avg: (companies_avg_fields | null)
    count: Scalars['Int']
    max: (companies_max_fields | null)
    min: (companies_min_fields | null)
    stddev: (companies_stddev_fields | null)
    stddev_pop: (companies_stddev_pop_fields | null)
    stddev_samp: (companies_stddev_samp_fields | null)
    sum: (companies_sum_fields | null)
    var_pop: (companies_var_pop_fields | null)
    var_samp: (companies_var_samp_fields | null)
    variance: (companies_variance_fields | null)
    __typename: 'companies_aggregate_fields'
}


/** aggregate avg on columns */
export interface companies_avg_fields {
    founded_year: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    __typename: 'companies_avg_fields'
}


/** unique or primary key constraints on table "companies" */
export type companies_constraint = 'companies_name_key' | 'companies_pkey'


/** aggregate max on columns */
export interface companies_max_fields {
    ceo: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    founded_year: (Scalars['Int'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    type: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'companies_max_fields'
}


/** aggregate min on columns */
export interface companies_min_fields {
    ceo: (Scalars['String'] | null)
    created_at: (Scalars['timestamptz'] | null)
    founded_year: (Scalars['Int'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    type: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'companies_min_fields'
}


/** response of any mutation on the table "companies" */
export interface companies_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: companies[]
    __typename: 'companies_mutation_response'
}


/** select columns of table "companies" */
export type companies_select_column = 'ceo' | 'created_at' | 'founded_year' | 'id' | 'name' | 'type' | 'updated_at'


/** aggregate stddev on columns */
export interface companies_stddev_fields {
    founded_year: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    __typename: 'companies_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface companies_stddev_pop_fields {
    founded_year: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    __typename: 'companies_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface companies_stddev_samp_fields {
    founded_year: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    __typename: 'companies_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface companies_sum_fields {
    founded_year: (Scalars['Int'] | null)
    id: (Scalars['Int'] | null)
    __typename: 'companies_sum_fields'
}


/** update columns of table "companies" */
export type companies_update_column = 'ceo' | 'created_at' | 'founded_year' | 'id' | 'name' | 'type' | 'updated_at'


/** aggregate var_pop on columns */
export interface companies_var_pop_fields {
    founded_year: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    __typename: 'companies_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface companies_var_samp_fields {
    founded_year: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    __typename: 'companies_var_samp_fields'
}


/** aggregate variance on columns */
export interface companies_variance_fields {
    founded_year: (Scalars['Float'] | null)
    id: (Scalars['Float'] | null)
    __typename: 'companies_variance_fields'
}


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "moons" */
export interface moons {
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    name: Scalars['String']
    planet_id: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'moons'
}


/** aggregated selection of "moons" */
export interface moons_aggregate {
    aggregate: (moons_aggregate_fields | null)
    nodes: moons[]
    __typename: 'moons_aggregate'
}


/** aggregate fields of "moons" */
export interface moons_aggregate_fields {
    avg: (moons_avg_fields | null)
    count: Scalars['Int']
    max: (moons_max_fields | null)
    min: (moons_min_fields | null)
    stddev: (moons_stddev_fields | null)
    stddev_pop: (moons_stddev_pop_fields | null)
    stddev_samp: (moons_stddev_samp_fields | null)
    sum: (moons_sum_fields | null)
    var_pop: (moons_var_pop_fields | null)
    var_samp: (moons_var_samp_fields | null)
    variance: (moons_variance_fields | null)
    __typename: 'moons_aggregate_fields'
}


/** aggregate avg on columns */
export interface moons_avg_fields {
    id: (Scalars['Float'] | null)
    planet_id: (Scalars['Float'] | null)
    __typename: 'moons_avg_fields'
}


/** unique or primary key constraints on table "moons" */
export type moons_constraint = 'moons_name_key' | 'moons_pkey'


/** aggregate max on columns */
export interface moons_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    planet_id: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'moons_max_fields'
}


/** aggregate min on columns */
export interface moons_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    planet_id: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'moons_min_fields'
}


/** response of any mutation on the table "moons" */
export interface moons_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: moons[]
    __typename: 'moons_mutation_response'
}


/** select columns of table "moons" */
export type moons_select_column = 'created_at' | 'id' | 'name' | 'planet_id' | 'updated_at'


/** aggregate stddev on columns */
export interface moons_stddev_fields {
    id: (Scalars['Float'] | null)
    planet_id: (Scalars['Float'] | null)
    __typename: 'moons_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface moons_stddev_pop_fields {
    id: (Scalars['Float'] | null)
    planet_id: (Scalars['Float'] | null)
    __typename: 'moons_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface moons_stddev_samp_fields {
    id: (Scalars['Float'] | null)
    planet_id: (Scalars['Float'] | null)
    __typename: 'moons_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface moons_sum_fields {
    id: (Scalars['Int'] | null)
    planet_id: (Scalars['Int'] | null)
    __typename: 'moons_sum_fields'
}


/** update columns of table "moons" */
export type moons_update_column = 'created_at' | 'id' | 'name' | 'planet_id' | 'updated_at'


/** aggregate var_pop on columns */
export interface moons_var_pop_fields {
    id: (Scalars['Float'] | null)
    planet_id: (Scalars['Float'] | null)
    __typename: 'moons_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface moons_var_samp_fields {
    id: (Scalars['Float'] | null)
    planet_id: (Scalars['Float'] | null)
    __typename: 'moons_var_samp_fields'
}


/** aggregate variance on columns */
export interface moons_variance_fields {
    id: (Scalars['Float'] | null)
    planet_id: (Scalars['Float'] | null)
    __typename: 'moons_variance_fields'
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "companies" */
    delete_companies: (companies_mutation_response | null)
    /** delete single row from the table: "companies" */
    delete_companies_by_pk: (companies | null)
    /** delete data from the table: "moons" */
    delete_moons: (moons_mutation_response | null)
    /** delete single row from the table: "moons" */
    delete_moons_by_pk: (moons | null)
    /** delete data from the table: "planets" */
    delete_planets: (planets_mutation_response | null)
    /** delete single row from the table: "planets" */
    delete_planets_by_pk: (planets | null)
    /** delete data from the table: "products" */
    delete_products: (products_mutation_response | null)
    /** delete single row from the table: "products" */
    delete_products_by_pk: (products | null)
    /** insert data into the table: "companies" */
    insert_companies: (companies_mutation_response | null)
    /** insert a single row into the table: "companies" */
    insert_companies_one: (companies | null)
    /** insert data into the table: "moons" */
    insert_moons: (moons_mutation_response | null)
    /** insert a single row into the table: "moons" */
    insert_moons_one: (moons | null)
    /** insert data into the table: "planets" */
    insert_planets: (planets_mutation_response | null)
    /** insert a single row into the table: "planets" */
    insert_planets_one: (planets | null)
    /** insert data into the table: "products" */
    insert_products: (products_mutation_response | null)
    /** insert a single row into the table: "products" */
    insert_products_one: (products | null)
    /** update data of the table: "companies" */
    update_companies: (companies_mutation_response | null)
    /** update single row of the table: "companies" */
    update_companies_by_pk: (companies | null)
    /** update multiples rows of table: "companies" */
    update_companies_many: ((companies_mutation_response | null)[] | null)
    /** update data of the table: "moons" */
    update_moons: (moons_mutation_response | null)
    /** update single row of the table: "moons" */
    update_moons_by_pk: (moons | null)
    /** update multiples rows of table: "moons" */
    update_moons_many: ((moons_mutation_response | null)[] | null)
    /** update data of the table: "planets" */
    update_planets: (planets_mutation_response | null)
    /** update single row of the table: "planets" */
    update_planets_by_pk: (planets | null)
    /** update multiples rows of table: "planets" */
    update_planets_many: ((planets_mutation_response | null)[] | null)
    /** update data of the table: "products" */
    update_products: (products_mutation_response | null)
    /** update single row of the table: "products" */
    update_products_by_pk: (products | null)
    /** update multiples rows of table: "products" */
    update_products_many: ((products_mutation_response | null)[] | null)
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "planets" */
export interface planets {
    created_at: Scalars['timestamptz']
    geology_content: Scalars['String']
    geology_source: Scalars['String']
    id: Scalars['Int']
    name: Scalars['String']
    overview_content: Scalars['String']
    overview_source: Scalars['String']
    radius: Scalars['bigint']
    revolution: Scalars['bigint']
    rotation: Scalars['bigint']
    structure_content: Scalars['String']
    structure_source: Scalars['String']
    temperature: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'planets'
}


/** aggregated selection of "planets" */
export interface planets_aggregate {
    aggregate: (planets_aggregate_fields | null)
    nodes: planets[]
    __typename: 'planets_aggregate'
}


/** aggregate fields of "planets" */
export interface planets_aggregate_fields {
    avg: (planets_avg_fields | null)
    count: Scalars['Int']
    max: (planets_max_fields | null)
    min: (planets_min_fields | null)
    stddev: (planets_stddev_fields | null)
    stddev_pop: (planets_stddev_pop_fields | null)
    stddev_samp: (planets_stddev_samp_fields | null)
    sum: (planets_sum_fields | null)
    var_pop: (planets_var_pop_fields | null)
    var_samp: (planets_var_samp_fields | null)
    variance: (planets_variance_fields | null)
    __typename: 'planets_aggregate_fields'
}


/** aggregate avg on columns */
export interface planets_avg_fields {
    id: (Scalars['Float'] | null)
    radius: (Scalars['Float'] | null)
    revolution: (Scalars['Float'] | null)
    rotation: (Scalars['Float'] | null)
    temperature: (Scalars['Float'] | null)
    __typename: 'planets_avg_fields'
}


/** unique or primary key constraints on table "planets" */
export type planets_constraint = 'planets_name_key' | 'planets_pkey'


/** aggregate max on columns */
export interface planets_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    geology_content: (Scalars['String'] | null)
    geology_source: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    overview_content: (Scalars['String'] | null)
    overview_source: (Scalars['String'] | null)
    radius: (Scalars['bigint'] | null)
    revolution: (Scalars['bigint'] | null)
    rotation: (Scalars['bigint'] | null)
    structure_content: (Scalars['String'] | null)
    structure_source: (Scalars['String'] | null)
    temperature: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'planets_max_fields'
}


/** aggregate min on columns */
export interface planets_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    geology_content: (Scalars['String'] | null)
    geology_source: (Scalars['String'] | null)
    id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    overview_content: (Scalars['String'] | null)
    overview_source: (Scalars['String'] | null)
    radius: (Scalars['bigint'] | null)
    revolution: (Scalars['bigint'] | null)
    rotation: (Scalars['bigint'] | null)
    structure_content: (Scalars['String'] | null)
    structure_source: (Scalars['String'] | null)
    temperature: (Scalars['Int'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'planets_min_fields'
}


/** response of any mutation on the table "planets" */
export interface planets_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: planets[]
    __typename: 'planets_mutation_response'
}


/** select columns of table "planets" */
export type planets_select_column = 'created_at' | 'geology_content' | 'geology_source' | 'id' | 'name' | 'overview_content' | 'overview_source' | 'radius' | 'revolution' | 'rotation' | 'structure_content' | 'structure_source' | 'temperature' | 'updated_at'


/** aggregate stddev on columns */
export interface planets_stddev_fields {
    id: (Scalars['Float'] | null)
    radius: (Scalars['Float'] | null)
    revolution: (Scalars['Float'] | null)
    rotation: (Scalars['Float'] | null)
    temperature: (Scalars['Float'] | null)
    __typename: 'planets_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface planets_stddev_pop_fields {
    id: (Scalars['Float'] | null)
    radius: (Scalars['Float'] | null)
    revolution: (Scalars['Float'] | null)
    rotation: (Scalars['Float'] | null)
    temperature: (Scalars['Float'] | null)
    __typename: 'planets_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface planets_stddev_samp_fields {
    id: (Scalars['Float'] | null)
    radius: (Scalars['Float'] | null)
    revolution: (Scalars['Float'] | null)
    rotation: (Scalars['Float'] | null)
    temperature: (Scalars['Float'] | null)
    __typename: 'planets_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface planets_sum_fields {
    id: (Scalars['Int'] | null)
    radius: (Scalars['bigint'] | null)
    revolution: (Scalars['bigint'] | null)
    rotation: (Scalars['bigint'] | null)
    temperature: (Scalars['Int'] | null)
    __typename: 'planets_sum_fields'
}


/** update columns of table "planets" */
export type planets_update_column = 'created_at' | 'geology_content' | 'geology_source' | 'id' | 'name' | 'overview_content' | 'overview_source' | 'radius' | 'revolution' | 'rotation' | 'structure_content' | 'structure_source' | 'temperature' | 'updated_at'


/** aggregate var_pop on columns */
export interface planets_var_pop_fields {
    id: (Scalars['Float'] | null)
    radius: (Scalars['Float'] | null)
    revolution: (Scalars['Float'] | null)
    rotation: (Scalars['Float'] | null)
    temperature: (Scalars['Float'] | null)
    __typename: 'planets_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface planets_var_samp_fields {
    id: (Scalars['Float'] | null)
    radius: (Scalars['Float'] | null)
    revolution: (Scalars['Float'] | null)
    rotation: (Scalars['Float'] | null)
    temperature: (Scalars['Float'] | null)
    __typename: 'planets_var_samp_fields'
}


/** aggregate variance on columns */
export interface planets_variance_fields {
    id: (Scalars['Float'] | null)
    radius: (Scalars['Float'] | null)
    revolution: (Scalars['Float'] | null)
    rotation: (Scalars['Float'] | null)
    temperature: (Scalars['Float'] | null)
    __typename: 'planets_variance_fields'
}


/** columns and relationships of "products" */
export interface products {
    /** An object relationship */
    company: companies
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    manufacturer_id: Scalars['Int']
    name: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'products'
}


/** aggregated selection of "products" */
export interface products_aggregate {
    aggregate: (products_aggregate_fields | null)
    nodes: products[]
    __typename: 'products_aggregate'
}


/** aggregate fields of "products" */
export interface products_aggregate_fields {
    avg: (products_avg_fields | null)
    count: Scalars['Int']
    max: (products_max_fields | null)
    min: (products_min_fields | null)
    stddev: (products_stddev_fields | null)
    stddev_pop: (products_stddev_pop_fields | null)
    stddev_samp: (products_stddev_samp_fields | null)
    sum: (products_sum_fields | null)
    var_pop: (products_var_pop_fields | null)
    var_samp: (products_var_samp_fields | null)
    variance: (products_variance_fields | null)
    __typename: 'products_aggregate_fields'
}


/** aggregate avg on columns */
export interface products_avg_fields {
    id: (Scalars['Float'] | null)
    manufacturer_id: (Scalars['Float'] | null)
    __typename: 'products_avg_fields'
}


/** unique or primary key constraints on table "products" */
export type products_constraint = 'products_pkey'


/** aggregate max on columns */
export interface products_max_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['Int'] | null)
    manufacturer_id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'products_max_fields'
}


/** aggregate min on columns */
export interface products_min_fields {
    created_at: (Scalars['timestamptz'] | null)
    id: (Scalars['Int'] | null)
    manufacturer_id: (Scalars['Int'] | null)
    name: (Scalars['String'] | null)
    updated_at: (Scalars['timestamptz'] | null)
    __typename: 'products_min_fields'
}


/** response of any mutation on the table "products" */
export interface products_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: products[]
    __typename: 'products_mutation_response'
}


/** select columns of table "products" */
export type products_select_column = 'created_at' | 'id' | 'manufacturer_id' | 'name' | 'updated_at'


/** aggregate stddev on columns */
export interface products_stddev_fields {
    id: (Scalars['Float'] | null)
    manufacturer_id: (Scalars['Float'] | null)
    __typename: 'products_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface products_stddev_pop_fields {
    id: (Scalars['Float'] | null)
    manufacturer_id: (Scalars['Float'] | null)
    __typename: 'products_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface products_stddev_samp_fields {
    id: (Scalars['Float'] | null)
    manufacturer_id: (Scalars['Float'] | null)
    __typename: 'products_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface products_sum_fields {
    id: (Scalars['Int'] | null)
    manufacturer_id: (Scalars['Int'] | null)
    __typename: 'products_sum_fields'
}


/** update columns of table "products" */
export type products_update_column = 'created_at' | 'id' | 'manufacturer_id' | 'name' | 'updated_at'


/** aggregate var_pop on columns */
export interface products_var_pop_fields {
    id: (Scalars['Float'] | null)
    manufacturer_id: (Scalars['Float'] | null)
    __typename: 'products_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface products_var_samp_fields {
    id: (Scalars['Float'] | null)
    manufacturer_id: (Scalars['Float'] | null)
    __typename: 'products_var_samp_fields'
}


/** aggregate variance on columns */
export interface products_variance_fields {
    id: (Scalars['Float'] | null)
    manufacturer_id: (Scalars['Float'] | null)
    __typename: 'products_variance_fields'
}

export interface query_root {
    /** fetch data from the table: "companies" */
    companies: companies[]
    /** fetch aggregated fields from the table: "companies" */
    companies_aggregate: companies_aggregate
    /** fetch data from the table: "companies" using primary key columns */
    companies_by_pk: (companies | null)
    /** fetch data from the table: "moons" */
    moons: moons[]
    /** fetch aggregated fields from the table: "moons" */
    moons_aggregate: moons_aggregate
    /** fetch data from the table: "moons" using primary key columns */
    moons_by_pk: (moons | null)
    /** fetch data from the table: "planets" */
    planets: planets[]
    /** fetch aggregated fields from the table: "planets" */
    planets_aggregate: planets_aggregate
    /** fetch data from the table: "planets" using primary key columns */
    planets_by_pk: (planets | null)
    /** An array relationship */
    products: products[]
    /** An aggregate relationship */
    products_aggregate: products_aggregate
    /** fetch data from the table: "products" using primary key columns */
    products_by_pk: (products | null)
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "companies" */
    companies: companies[]
    /** fetch aggregated fields from the table: "companies" */
    companies_aggregate: companies_aggregate
    /** fetch data from the table: "companies" using primary key columns */
    companies_by_pk: (companies | null)
    /** fetch data from the table in a streaming manner: "companies" */
    companies_stream: companies[]
    /** fetch data from the table: "moons" */
    moons: moons[]
    /** fetch aggregated fields from the table: "moons" */
    moons_aggregate: moons_aggregate
    /** fetch data from the table: "moons" using primary key columns */
    moons_by_pk: (moons | null)
    /** fetch data from the table in a streaming manner: "moons" */
    moons_stream: moons[]
    /** fetch data from the table: "planets" */
    planets: planets[]
    /** fetch aggregated fields from the table: "planets" */
    planets_aggregate: planets_aggregate
    /** fetch data from the table: "planets" using primary key columns */
    planets_by_pk: (planets | null)
    /** fetch data from the table in a streaming manner: "planets" */
    planets_stream: planets[]
    /** An array relationship */
    products: products[]
    /** An aggregate relationship */
    products_aggregate: products_aggregate
    /** fetch data from the table: "products" using primary key columns */
    products_by_pk: (products | null)
    /** fetch data from the table in a streaming manner: "products" */
    products_stream: products[]
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {_eq?: (Scalars['bigint'] | null),_gt?: (Scalars['bigint'] | null),_gte?: (Scalars['bigint'] | null),_in?: (Scalars['bigint'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['bigint'] | null),_lte?: (Scalars['bigint'] | null),_neq?: (Scalars['bigint'] | null),_nin?: (Scalars['bigint'][] | null)}


/** columns and relationships of "companies" */
export interface companiesGenqlSelection{
    ceo?: boolean | number
    created_at?: boolean | number
    founded_year?: boolean | number
    id?: boolean | number
    name?: boolean | number
    /** An array relationship */
    products?: (productsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (products_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (products_order_by[] | null), 
    /** filter the rows returned */
    where?: (products_bool_exp | null)} })
    /** An aggregate relationship */
    products_aggregate?: (products_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (products_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (products_order_by[] | null), 
    /** filter the rows returned */
    where?: (products_bool_exp | null)} })
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "companies" */
export interface companies_aggregateGenqlSelection{
    aggregate?: companies_aggregate_fieldsGenqlSelection
    nodes?: companiesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "companies" */
export interface companies_aggregate_fieldsGenqlSelection{
    avg?: companies_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (companies_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: companies_max_fieldsGenqlSelection
    min?: companies_min_fieldsGenqlSelection
    stddev?: companies_stddev_fieldsGenqlSelection
    stddev_pop?: companies_stddev_pop_fieldsGenqlSelection
    stddev_samp?: companies_stddev_samp_fieldsGenqlSelection
    sum?: companies_sum_fieldsGenqlSelection
    var_pop?: companies_var_pop_fieldsGenqlSelection
    var_samp?: companies_var_samp_fieldsGenqlSelection
    variance?: companies_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface companies_avg_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "companies". All fields are combined with a logical 'AND'. */
export interface companies_bool_exp {_and?: (companies_bool_exp[] | null),_not?: (companies_bool_exp | null),_or?: (companies_bool_exp[] | null),ceo?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),founded_year?: (Int_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),products?: (products_bool_exp | null),products_aggregate?: (products_aggregate_bool_exp | null),type?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "companies" */
export interface companies_inc_input {founded_year?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "companies" */
export interface companies_insert_input {ceo?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),founded_year?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),products?: (products_arr_rel_insert_input | null),type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface companies_max_fieldsGenqlSelection{
    ceo?: boolean | number
    created_at?: boolean | number
    founded_year?: boolean | number
    id?: boolean | number
    name?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface companies_min_fieldsGenqlSelection{
    ceo?: boolean | number
    created_at?: boolean | number
    founded_year?: boolean | number
    id?: boolean | number
    name?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "companies" */
export interface companies_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: companiesGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "companies" */
export interface companies_obj_rel_insert_input {data: companies_insert_input,
/** upsert condition */
on_conflict?: (companies_on_conflict | null)}


/** on_conflict condition type for table "companies" */
export interface companies_on_conflict {constraint: companies_constraint,update_columns?: companies_update_column[],where?: (companies_bool_exp | null)}


/** Ordering options when selecting data from "companies". */
export interface companies_order_by {ceo?: (order_by | null),created_at?: (order_by | null),founded_year?: (order_by | null),id?: (order_by | null),name?: (order_by | null),products_aggregate?: (products_aggregate_order_by | null),type?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: companies */
export interface companies_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "companies" */
export interface companies_set_input {ceo?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),founded_year?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface companies_stddev_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface companies_stddev_pop_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface companies_stddev_samp_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "companies" */
export interface companies_stream_cursor_input {
/** Stream column input with initial value */
initial_value: companies_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface companies_stream_cursor_value_input {ceo?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),founded_year?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface companies_sum_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface companies_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (companies_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (companies_set_input | null),
/** filter the rows which have to be updated */
where: companies_bool_exp}


/** aggregate var_pop on columns */
export interface companies_var_pop_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface companies_var_samp_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface companies_variance_fieldsGenqlSelection{
    founded_year?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "moons" */
export interface moonsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    name?: boolean | number
    planet_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "moons" */
export interface moons_aggregateGenqlSelection{
    aggregate?: moons_aggregate_fieldsGenqlSelection
    nodes?: moonsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "moons" */
export interface moons_aggregate_fieldsGenqlSelection{
    avg?: moons_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (moons_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: moons_max_fieldsGenqlSelection
    min?: moons_min_fieldsGenqlSelection
    stddev?: moons_stddev_fieldsGenqlSelection
    stddev_pop?: moons_stddev_pop_fieldsGenqlSelection
    stddev_samp?: moons_stddev_samp_fieldsGenqlSelection
    sum?: moons_sum_fieldsGenqlSelection
    var_pop?: moons_var_pop_fieldsGenqlSelection
    var_samp?: moons_var_samp_fieldsGenqlSelection
    variance?: moons_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface moons_avg_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "moons". All fields are combined with a logical 'AND'. */
export interface moons_bool_exp {_and?: (moons_bool_exp[] | null),_not?: (moons_bool_exp | null),_or?: (moons_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),planet_id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "moons" */
export interface moons_inc_input {id?: (Scalars['Int'] | null),planet_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "moons" */
export interface moons_insert_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),planet_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface moons_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    name?: boolean | number
    planet_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface moons_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    name?: boolean | number
    planet_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "moons" */
export interface moons_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: moonsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "moons" */
export interface moons_on_conflict {constraint: moons_constraint,update_columns?: moons_update_column[],where?: (moons_bool_exp | null)}


/** Ordering options when selecting data from "moons". */
export interface moons_order_by {created_at?: (order_by | null),id?: (order_by | null),name?: (order_by | null),planet_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: moons */
export interface moons_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "moons" */
export interface moons_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),planet_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface moons_stddev_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface moons_stddev_pop_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface moons_stddev_samp_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "moons" */
export interface moons_stream_cursor_input {
/** Stream column input with initial value */
initial_value: moons_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface moons_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),planet_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface moons_sum_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface moons_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (moons_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (moons_set_input | null),
/** filter the rows which have to be updated */
where: moons_bool_exp}


/** aggregate var_pop on columns */
export interface moons_var_pop_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface moons_var_samp_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface moons_variance_fieldsGenqlSelection{
    id?: boolean | number
    planet_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "companies" */
    delete_companies?: (companies_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: companies_bool_exp} })
    /** delete single row from the table: "companies" */
    delete_companies_by_pk?: (companiesGenqlSelection & { __args: {id: Scalars['Int']} })
    /** delete data from the table: "moons" */
    delete_moons?: (moons_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: moons_bool_exp} })
    /** delete single row from the table: "moons" */
    delete_moons_by_pk?: (moonsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** delete data from the table: "planets" */
    delete_planets?: (planets_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: planets_bool_exp} })
    /** delete single row from the table: "planets" */
    delete_planets_by_pk?: (planetsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** delete data from the table: "products" */
    delete_products?: (products_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: products_bool_exp} })
    /** delete single row from the table: "products" */
    delete_products_by_pk?: (productsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** insert data into the table: "companies" */
    insert_companies?: (companies_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: companies_insert_input[], 
    /** upsert condition */
    on_conflict?: (companies_on_conflict | null)} })
    /** insert a single row into the table: "companies" */
    insert_companies_one?: (companiesGenqlSelection & { __args: {
    /** the row to be inserted */
    object: companies_insert_input, 
    /** upsert condition */
    on_conflict?: (companies_on_conflict | null)} })
    /** insert data into the table: "moons" */
    insert_moons?: (moons_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: moons_insert_input[], 
    /** upsert condition */
    on_conflict?: (moons_on_conflict | null)} })
    /** insert a single row into the table: "moons" */
    insert_moons_one?: (moonsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: moons_insert_input, 
    /** upsert condition */
    on_conflict?: (moons_on_conflict | null)} })
    /** insert data into the table: "planets" */
    insert_planets?: (planets_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: planets_insert_input[], 
    /** upsert condition */
    on_conflict?: (planets_on_conflict | null)} })
    /** insert a single row into the table: "planets" */
    insert_planets_one?: (planetsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: planets_insert_input, 
    /** upsert condition */
    on_conflict?: (planets_on_conflict | null)} })
    /** insert data into the table: "products" */
    insert_products?: (products_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: products_insert_input[], 
    /** upsert condition */
    on_conflict?: (products_on_conflict | null)} })
    /** insert a single row into the table: "products" */
    insert_products_one?: (productsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: products_insert_input, 
    /** upsert condition */
    on_conflict?: (products_on_conflict | null)} })
    /** update data of the table: "companies" */
    update_companies?: (companies_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (companies_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (companies_set_input | null), 
    /** filter the rows which have to be updated */
    where: companies_bool_exp} })
    /** update single row of the table: "companies" */
    update_companies_by_pk?: (companiesGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (companies_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (companies_set_input | null), pk_columns: companies_pk_columns_input} })
    /** update multiples rows of table: "companies" */
    update_companies_many?: (companies_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: companies_updates[]} })
    /** update data of the table: "moons" */
    update_moons?: (moons_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (moons_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (moons_set_input | null), 
    /** filter the rows which have to be updated */
    where: moons_bool_exp} })
    /** update single row of the table: "moons" */
    update_moons_by_pk?: (moonsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (moons_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (moons_set_input | null), pk_columns: moons_pk_columns_input} })
    /** update multiples rows of table: "moons" */
    update_moons_many?: (moons_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: moons_updates[]} })
    /** update data of the table: "planets" */
    update_planets?: (planets_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (planets_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (planets_set_input | null), 
    /** filter the rows which have to be updated */
    where: planets_bool_exp} })
    /** update single row of the table: "planets" */
    update_planets_by_pk?: (planetsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (planets_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (planets_set_input | null), pk_columns: planets_pk_columns_input} })
    /** update multiples rows of table: "planets" */
    update_planets_many?: (planets_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: planets_updates[]} })
    /** update data of the table: "products" */
    update_products?: (products_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (products_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (products_set_input | null), 
    /** filter the rows which have to be updated */
    where: products_bool_exp} })
    /** update single row of the table: "products" */
    update_products_by_pk?: (productsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (products_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (products_set_input | null), pk_columns: products_pk_columns_input} })
    /** update multiples rows of table: "products" */
    update_products_many?: (products_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: products_updates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "planets" */
export interface planetsGenqlSelection{
    created_at?: boolean | number
    geology_content?: boolean | number
    geology_source?: boolean | number
    id?: boolean | number
    name?: boolean | number
    overview_content?: boolean | number
    overview_source?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    structure_content?: boolean | number
    structure_source?: boolean | number
    temperature?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "planets" */
export interface planets_aggregateGenqlSelection{
    aggregate?: planets_aggregate_fieldsGenqlSelection
    nodes?: planetsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "planets" */
export interface planets_aggregate_fieldsGenqlSelection{
    avg?: planets_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (planets_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: planets_max_fieldsGenqlSelection
    min?: planets_min_fieldsGenqlSelection
    stddev?: planets_stddev_fieldsGenqlSelection
    stddev_pop?: planets_stddev_pop_fieldsGenqlSelection
    stddev_samp?: planets_stddev_samp_fieldsGenqlSelection
    sum?: planets_sum_fieldsGenqlSelection
    var_pop?: planets_var_pop_fieldsGenqlSelection
    var_samp?: planets_var_samp_fieldsGenqlSelection
    variance?: planets_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface planets_avg_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "planets". All fields are combined with a logical 'AND'. */
export interface planets_bool_exp {_and?: (planets_bool_exp[] | null),_not?: (planets_bool_exp | null),_or?: (planets_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),geology_content?: (String_comparison_exp | null),geology_source?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),overview_content?: (String_comparison_exp | null),overview_source?: (String_comparison_exp | null),radius?: (bigint_comparison_exp | null),revolution?: (bigint_comparison_exp | null),rotation?: (bigint_comparison_exp | null),structure_content?: (String_comparison_exp | null),structure_source?: (String_comparison_exp | null),temperature?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "planets" */
export interface planets_inc_input {id?: (Scalars['Int'] | null),radius?: (Scalars['bigint'] | null),revolution?: (Scalars['bigint'] | null),rotation?: (Scalars['bigint'] | null),temperature?: (Scalars['Int'] | null)}


/** input type for inserting data into table "planets" */
export interface planets_insert_input {created_at?: (Scalars['timestamptz'] | null),geology_content?: (Scalars['String'] | null),geology_source?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),overview_content?: (Scalars['String'] | null),overview_source?: (Scalars['String'] | null),radius?: (Scalars['bigint'] | null),revolution?: (Scalars['bigint'] | null),rotation?: (Scalars['bigint'] | null),structure_content?: (Scalars['String'] | null),structure_source?: (Scalars['String'] | null),temperature?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface planets_max_fieldsGenqlSelection{
    created_at?: boolean | number
    geology_content?: boolean | number
    geology_source?: boolean | number
    id?: boolean | number
    name?: boolean | number
    overview_content?: boolean | number
    overview_source?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    structure_content?: boolean | number
    structure_source?: boolean | number
    temperature?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface planets_min_fieldsGenqlSelection{
    created_at?: boolean | number
    geology_content?: boolean | number
    geology_source?: boolean | number
    id?: boolean | number
    name?: boolean | number
    overview_content?: boolean | number
    overview_source?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    structure_content?: boolean | number
    structure_source?: boolean | number
    temperature?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "planets" */
export interface planets_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: planetsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "planets" */
export interface planets_on_conflict {constraint: planets_constraint,update_columns?: planets_update_column[],where?: (planets_bool_exp | null)}


/** Ordering options when selecting data from "planets". */
export interface planets_order_by {created_at?: (order_by | null),geology_content?: (order_by | null),geology_source?: (order_by | null),id?: (order_by | null),name?: (order_by | null),overview_content?: (order_by | null),overview_source?: (order_by | null),radius?: (order_by | null),revolution?: (order_by | null),rotation?: (order_by | null),structure_content?: (order_by | null),structure_source?: (order_by | null),temperature?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: planets */
export interface planets_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "planets" */
export interface planets_set_input {created_at?: (Scalars['timestamptz'] | null),geology_content?: (Scalars['String'] | null),geology_source?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),overview_content?: (Scalars['String'] | null),overview_source?: (Scalars['String'] | null),radius?: (Scalars['bigint'] | null),revolution?: (Scalars['bigint'] | null),rotation?: (Scalars['bigint'] | null),structure_content?: (Scalars['String'] | null),structure_source?: (Scalars['String'] | null),temperature?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface planets_stddev_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface planets_stddev_pop_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface planets_stddev_samp_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "planets" */
export interface planets_stream_cursor_input {
/** Stream column input with initial value */
initial_value: planets_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface planets_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),geology_content?: (Scalars['String'] | null),geology_source?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),overview_content?: (Scalars['String'] | null),overview_source?: (Scalars['String'] | null),radius?: (Scalars['bigint'] | null),revolution?: (Scalars['bigint'] | null),rotation?: (Scalars['bigint'] | null),structure_content?: (Scalars['String'] | null),structure_source?: (Scalars['String'] | null),temperature?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface planets_sum_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface planets_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (planets_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (planets_set_input | null),
/** filter the rows which have to be updated */
where: planets_bool_exp}


/** aggregate var_pop on columns */
export interface planets_var_pop_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface planets_var_samp_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface planets_variance_fieldsGenqlSelection{
    id?: boolean | number
    radius?: boolean | number
    revolution?: boolean | number
    rotation?: boolean | number
    temperature?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "products" */
export interface productsGenqlSelection{
    /** An object relationship */
    company?: companiesGenqlSelection
    created_at?: boolean | number
    id?: boolean | number
    manufacturer_id?: boolean | number
    name?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "products" */
export interface products_aggregateGenqlSelection{
    aggregate?: products_aggregate_fieldsGenqlSelection
    nodes?: productsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface products_aggregate_bool_exp {count?: (products_aggregate_bool_exp_count | null)}

export interface products_aggregate_bool_exp_count {arguments?: (products_select_column[] | null),distinct?: (Scalars['Boolean'] | null),filter?: (products_bool_exp | null),predicate: Int_comparison_exp}


/** aggregate fields of "products" */
export interface products_aggregate_fieldsGenqlSelection{
    avg?: products_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (products_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: products_max_fieldsGenqlSelection
    min?: products_min_fieldsGenqlSelection
    stddev?: products_stddev_fieldsGenqlSelection
    stddev_pop?: products_stddev_pop_fieldsGenqlSelection
    stddev_samp?: products_stddev_samp_fieldsGenqlSelection
    sum?: products_sum_fieldsGenqlSelection
    var_pop?: products_var_pop_fieldsGenqlSelection
    var_samp?: products_var_samp_fieldsGenqlSelection
    variance?: products_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "products" */
export interface products_aggregate_order_by {avg?: (products_avg_order_by | null),count?: (order_by | null),max?: (products_max_order_by | null),min?: (products_min_order_by | null),stddev?: (products_stddev_order_by | null),stddev_pop?: (products_stddev_pop_order_by | null),stddev_samp?: (products_stddev_samp_order_by | null),sum?: (products_sum_order_by | null),var_pop?: (products_var_pop_order_by | null),var_samp?: (products_var_samp_order_by | null),variance?: (products_variance_order_by | null)}


/** input type for inserting array relation for remote table "products" */
export interface products_arr_rel_insert_input {data: products_insert_input[],
/** upsert condition */
on_conflict?: (products_on_conflict | null)}


/** aggregate avg on columns */
export interface products_avg_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "products" */
export interface products_avg_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export interface products_bool_exp {_and?: (products_bool_exp[] | null),_not?: (products_bool_exp | null),_or?: (products_bool_exp[] | null),company?: (companies_bool_exp | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),manufacturer_id?: (Int_comparison_exp | null),name?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "products" */
export interface products_inc_input {id?: (Scalars['Int'] | null),manufacturer_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "products" */
export interface products_insert_input {company?: (companies_obj_rel_insert_input | null),created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),manufacturer_id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface products_max_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    manufacturer_id?: boolean | number
    name?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "products" */
export interface products_max_order_by {created_at?: (order_by | null),id?: (order_by | null),manufacturer_id?: (order_by | null),name?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface products_min_fieldsGenqlSelection{
    created_at?: boolean | number
    id?: boolean | number
    manufacturer_id?: boolean | number
    name?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "products" */
export interface products_min_order_by {created_at?: (order_by | null),id?: (order_by | null),manufacturer_id?: (order_by | null),name?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "products" */
export interface products_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: productsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "products" */
export interface products_on_conflict {constraint: products_constraint,update_columns?: products_update_column[],where?: (products_bool_exp | null)}


/** Ordering options when selecting data from "products". */
export interface products_order_by {company?: (companies_order_by | null),created_at?: (order_by | null),id?: (order_by | null),manufacturer_id?: (order_by | null),name?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: products */
export interface products_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "products" */
export interface products_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),manufacturer_id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface products_stddev_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "products" */
export interface products_stddev_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface products_stddev_pop_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "products" */
export interface products_stddev_pop_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface products_stddev_samp_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "products" */
export interface products_stddev_samp_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}


/** Streaming cursor of the table "products" */
export interface products_stream_cursor_input {
/** Stream column input with initial value */
initial_value: products_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface products_stream_cursor_value_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),manufacturer_id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate sum on columns */
export interface products_sum_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "products" */
export interface products_sum_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}

export interface products_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (products_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (products_set_input | null),
/** filter the rows which have to be updated */
where: products_bool_exp}


/** aggregate var_pop on columns */
export interface products_var_pop_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "products" */
export interface products_var_pop_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface products_var_samp_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "products" */
export interface products_var_samp_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}


/** aggregate variance on columns */
export interface products_variance_fieldsGenqlSelection{
    id?: boolean | number
    manufacturer_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "products" */
export interface products_variance_order_by {id?: (order_by | null),manufacturer_id?: (order_by | null)}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "companies" */
    companies?: (companiesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (companies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (companies_order_by[] | null), 
    /** filter the rows returned */
    where?: (companies_bool_exp | null)} })
    /** fetch aggregated fields from the table: "companies" */
    companies_aggregate?: (companies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (companies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (companies_order_by[] | null), 
    /** filter the rows returned */
    where?: (companies_bool_exp | null)} })
    /** fetch data from the table: "companies" using primary key columns */
    companies_by_pk?: (companiesGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "moons" */
    moons?: (moonsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (moons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (moons_order_by[] | null), 
    /** filter the rows returned */
    where?: (moons_bool_exp | null)} })
    /** fetch aggregated fields from the table: "moons" */
    moons_aggregate?: (moons_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (moons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (moons_order_by[] | null), 
    /** filter the rows returned */
    where?: (moons_bool_exp | null)} })
    /** fetch data from the table: "moons" using primary key columns */
    moons_by_pk?: (moonsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table: "planets" */
    planets?: (planetsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (planets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (planets_order_by[] | null), 
    /** filter the rows returned */
    where?: (planets_bool_exp | null)} })
    /** fetch aggregated fields from the table: "planets" */
    planets_aggregate?: (planets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (planets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (planets_order_by[] | null), 
    /** filter the rows returned */
    where?: (planets_bool_exp | null)} })
    /** fetch data from the table: "planets" using primary key columns */
    planets_by_pk?: (planetsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** An array relationship */
    products?: (productsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (products_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (products_order_by[] | null), 
    /** filter the rows returned */
    where?: (products_bool_exp | null)} })
    /** An aggregate relationship */
    products_aggregate?: (products_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (products_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (products_order_by[] | null), 
    /** filter the rows returned */
    where?: (products_bool_exp | null)} })
    /** fetch data from the table: "products" using primary key columns */
    products_by_pk?: (productsGenqlSelection & { __args: {id: Scalars['Int']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "companies" */
    companies?: (companiesGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (companies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (companies_order_by[] | null), 
    /** filter the rows returned */
    where?: (companies_bool_exp | null)} })
    /** fetch aggregated fields from the table: "companies" */
    companies_aggregate?: (companies_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (companies_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (companies_order_by[] | null), 
    /** filter the rows returned */
    where?: (companies_bool_exp | null)} })
    /** fetch data from the table: "companies" using primary key columns */
    companies_by_pk?: (companiesGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "companies" */
    companies_stream?: (companiesGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (companies_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (companies_bool_exp | null)} })
    /** fetch data from the table: "moons" */
    moons?: (moonsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (moons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (moons_order_by[] | null), 
    /** filter the rows returned */
    where?: (moons_bool_exp | null)} })
    /** fetch aggregated fields from the table: "moons" */
    moons_aggregate?: (moons_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (moons_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (moons_order_by[] | null), 
    /** filter the rows returned */
    where?: (moons_bool_exp | null)} })
    /** fetch data from the table: "moons" using primary key columns */
    moons_by_pk?: (moonsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "moons" */
    moons_stream?: (moonsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (moons_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (moons_bool_exp | null)} })
    /** fetch data from the table: "planets" */
    planets?: (planetsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (planets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (planets_order_by[] | null), 
    /** filter the rows returned */
    where?: (planets_bool_exp | null)} })
    /** fetch aggregated fields from the table: "planets" */
    planets_aggregate?: (planets_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (planets_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (planets_order_by[] | null), 
    /** filter the rows returned */
    where?: (planets_bool_exp | null)} })
    /** fetch data from the table: "planets" using primary key columns */
    planets_by_pk?: (planetsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "planets" */
    planets_stream?: (planetsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (planets_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (planets_bool_exp | null)} })
    /** An array relationship */
    products?: (productsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (products_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (products_order_by[] | null), 
    /** filter the rows returned */
    where?: (products_bool_exp | null)} })
    /** An aggregate relationship */
    products_aggregate?: (products_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (products_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (products_order_by[] | null), 
    /** filter the rows returned */
    where?: (products_bool_exp | null)} })
    /** fetch data from the table: "products" using primary key columns */
    products_by_pk?: (productsGenqlSelection & { __args: {id: Scalars['Int']} })
    /** fetch data from the table in a streaming manner: "products" */
    products_stream?: (productsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (products_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (products_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const companies_possibleTypes: string[] = ['companies']
    export const iscompanies = (obj?: { __typename?: any } | null): obj is companies => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies"')
      return companies_possibleTypes.includes(obj.__typename)
    }
    


    const companies_aggregate_possibleTypes: string[] = ['companies_aggregate']
    export const iscompanies_aggregate = (obj?: { __typename?: any } | null): obj is companies_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_aggregate"')
      return companies_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const companies_aggregate_fields_possibleTypes: string[] = ['companies_aggregate_fields']
    export const iscompanies_aggregate_fields = (obj?: { __typename?: any } | null): obj is companies_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_aggregate_fields"')
      return companies_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_avg_fields_possibleTypes: string[] = ['companies_avg_fields']
    export const iscompanies_avg_fields = (obj?: { __typename?: any } | null): obj is companies_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_avg_fields"')
      return companies_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_max_fields_possibleTypes: string[] = ['companies_max_fields']
    export const iscompanies_max_fields = (obj?: { __typename?: any } | null): obj is companies_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_max_fields"')
      return companies_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_min_fields_possibleTypes: string[] = ['companies_min_fields']
    export const iscompanies_min_fields = (obj?: { __typename?: any } | null): obj is companies_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_min_fields"')
      return companies_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_mutation_response_possibleTypes: string[] = ['companies_mutation_response']
    export const iscompanies_mutation_response = (obj?: { __typename?: any } | null): obj is companies_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_mutation_response"')
      return companies_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const companies_stddev_fields_possibleTypes: string[] = ['companies_stddev_fields']
    export const iscompanies_stddev_fields = (obj?: { __typename?: any } | null): obj is companies_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_stddev_fields"')
      return companies_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_stddev_pop_fields_possibleTypes: string[] = ['companies_stddev_pop_fields']
    export const iscompanies_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is companies_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_stddev_pop_fields"')
      return companies_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_stddev_samp_fields_possibleTypes: string[] = ['companies_stddev_samp_fields']
    export const iscompanies_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is companies_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_stddev_samp_fields"')
      return companies_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_sum_fields_possibleTypes: string[] = ['companies_sum_fields']
    export const iscompanies_sum_fields = (obj?: { __typename?: any } | null): obj is companies_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_sum_fields"')
      return companies_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_var_pop_fields_possibleTypes: string[] = ['companies_var_pop_fields']
    export const iscompanies_var_pop_fields = (obj?: { __typename?: any } | null): obj is companies_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_var_pop_fields"')
      return companies_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_var_samp_fields_possibleTypes: string[] = ['companies_var_samp_fields']
    export const iscompanies_var_samp_fields = (obj?: { __typename?: any } | null): obj is companies_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_var_samp_fields"')
      return companies_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const companies_variance_fields_possibleTypes: string[] = ['companies_variance_fields']
    export const iscompanies_variance_fields = (obj?: { __typename?: any } | null): obj is companies_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "iscompanies_variance_fields"')
      return companies_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_possibleTypes: string[] = ['moons']
    export const ismoons = (obj?: { __typename?: any } | null): obj is moons => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons"')
      return moons_possibleTypes.includes(obj.__typename)
    }
    


    const moons_aggregate_possibleTypes: string[] = ['moons_aggregate']
    export const ismoons_aggregate = (obj?: { __typename?: any } | null): obj is moons_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_aggregate"')
      return moons_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const moons_aggregate_fields_possibleTypes: string[] = ['moons_aggregate_fields']
    export const ismoons_aggregate_fields = (obj?: { __typename?: any } | null): obj is moons_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_aggregate_fields"')
      return moons_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_avg_fields_possibleTypes: string[] = ['moons_avg_fields']
    export const ismoons_avg_fields = (obj?: { __typename?: any } | null): obj is moons_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_avg_fields"')
      return moons_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_max_fields_possibleTypes: string[] = ['moons_max_fields']
    export const ismoons_max_fields = (obj?: { __typename?: any } | null): obj is moons_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_max_fields"')
      return moons_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_min_fields_possibleTypes: string[] = ['moons_min_fields']
    export const ismoons_min_fields = (obj?: { __typename?: any } | null): obj is moons_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_min_fields"')
      return moons_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_mutation_response_possibleTypes: string[] = ['moons_mutation_response']
    export const ismoons_mutation_response = (obj?: { __typename?: any } | null): obj is moons_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_mutation_response"')
      return moons_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const moons_stddev_fields_possibleTypes: string[] = ['moons_stddev_fields']
    export const ismoons_stddev_fields = (obj?: { __typename?: any } | null): obj is moons_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_stddev_fields"')
      return moons_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_stddev_pop_fields_possibleTypes: string[] = ['moons_stddev_pop_fields']
    export const ismoons_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is moons_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_stddev_pop_fields"')
      return moons_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_stddev_samp_fields_possibleTypes: string[] = ['moons_stddev_samp_fields']
    export const ismoons_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is moons_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_stddev_samp_fields"')
      return moons_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_sum_fields_possibleTypes: string[] = ['moons_sum_fields']
    export const ismoons_sum_fields = (obj?: { __typename?: any } | null): obj is moons_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_sum_fields"')
      return moons_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_var_pop_fields_possibleTypes: string[] = ['moons_var_pop_fields']
    export const ismoons_var_pop_fields = (obj?: { __typename?: any } | null): obj is moons_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_var_pop_fields"')
      return moons_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_var_samp_fields_possibleTypes: string[] = ['moons_var_samp_fields']
    export const ismoons_var_samp_fields = (obj?: { __typename?: any } | null): obj is moons_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_var_samp_fields"')
      return moons_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const moons_variance_fields_possibleTypes: string[] = ['moons_variance_fields']
    export const ismoons_variance_fields = (obj?: { __typename?: any } | null): obj is moons_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismoons_variance_fields"')
      return moons_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const planets_possibleTypes: string[] = ['planets']
    export const isplanets = (obj?: { __typename?: any } | null): obj is planets => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets"')
      return planets_possibleTypes.includes(obj.__typename)
    }
    


    const planets_aggregate_possibleTypes: string[] = ['planets_aggregate']
    export const isplanets_aggregate = (obj?: { __typename?: any } | null): obj is planets_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_aggregate"')
      return planets_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const planets_aggregate_fields_possibleTypes: string[] = ['planets_aggregate_fields']
    export const isplanets_aggregate_fields = (obj?: { __typename?: any } | null): obj is planets_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_aggregate_fields"')
      return planets_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_avg_fields_possibleTypes: string[] = ['planets_avg_fields']
    export const isplanets_avg_fields = (obj?: { __typename?: any } | null): obj is planets_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_avg_fields"')
      return planets_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_max_fields_possibleTypes: string[] = ['planets_max_fields']
    export const isplanets_max_fields = (obj?: { __typename?: any } | null): obj is planets_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_max_fields"')
      return planets_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_min_fields_possibleTypes: string[] = ['planets_min_fields']
    export const isplanets_min_fields = (obj?: { __typename?: any } | null): obj is planets_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_min_fields"')
      return planets_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_mutation_response_possibleTypes: string[] = ['planets_mutation_response']
    export const isplanets_mutation_response = (obj?: { __typename?: any } | null): obj is planets_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_mutation_response"')
      return planets_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const planets_stddev_fields_possibleTypes: string[] = ['planets_stddev_fields']
    export const isplanets_stddev_fields = (obj?: { __typename?: any } | null): obj is planets_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_stddev_fields"')
      return planets_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_stddev_pop_fields_possibleTypes: string[] = ['planets_stddev_pop_fields']
    export const isplanets_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is planets_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_stddev_pop_fields"')
      return planets_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_stddev_samp_fields_possibleTypes: string[] = ['planets_stddev_samp_fields']
    export const isplanets_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is planets_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_stddev_samp_fields"')
      return planets_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_sum_fields_possibleTypes: string[] = ['planets_sum_fields']
    export const isplanets_sum_fields = (obj?: { __typename?: any } | null): obj is planets_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_sum_fields"')
      return planets_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_var_pop_fields_possibleTypes: string[] = ['planets_var_pop_fields']
    export const isplanets_var_pop_fields = (obj?: { __typename?: any } | null): obj is planets_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_var_pop_fields"')
      return planets_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_var_samp_fields_possibleTypes: string[] = ['planets_var_samp_fields']
    export const isplanets_var_samp_fields = (obj?: { __typename?: any } | null): obj is planets_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_var_samp_fields"')
      return planets_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const planets_variance_fields_possibleTypes: string[] = ['planets_variance_fields']
    export const isplanets_variance_fields = (obj?: { __typename?: any } | null): obj is planets_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isplanets_variance_fields"')
      return planets_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_possibleTypes: string[] = ['products']
    export const isproducts = (obj?: { __typename?: any } | null): obj is products => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts"')
      return products_possibleTypes.includes(obj.__typename)
    }
    


    const products_aggregate_possibleTypes: string[] = ['products_aggregate']
    export const isproducts_aggregate = (obj?: { __typename?: any } | null): obj is products_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_aggregate"')
      return products_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const products_aggregate_fields_possibleTypes: string[] = ['products_aggregate_fields']
    export const isproducts_aggregate_fields = (obj?: { __typename?: any } | null): obj is products_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_aggregate_fields"')
      return products_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_avg_fields_possibleTypes: string[] = ['products_avg_fields']
    export const isproducts_avg_fields = (obj?: { __typename?: any } | null): obj is products_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_avg_fields"')
      return products_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_max_fields_possibleTypes: string[] = ['products_max_fields']
    export const isproducts_max_fields = (obj?: { __typename?: any } | null): obj is products_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_max_fields"')
      return products_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_min_fields_possibleTypes: string[] = ['products_min_fields']
    export const isproducts_min_fields = (obj?: { __typename?: any } | null): obj is products_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_min_fields"')
      return products_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_mutation_response_possibleTypes: string[] = ['products_mutation_response']
    export const isproducts_mutation_response = (obj?: { __typename?: any } | null): obj is products_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_mutation_response"')
      return products_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const products_stddev_fields_possibleTypes: string[] = ['products_stddev_fields']
    export const isproducts_stddev_fields = (obj?: { __typename?: any } | null): obj is products_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_stddev_fields"')
      return products_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_stddev_pop_fields_possibleTypes: string[] = ['products_stddev_pop_fields']
    export const isproducts_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is products_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_stddev_pop_fields"')
      return products_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_stddev_samp_fields_possibleTypes: string[] = ['products_stddev_samp_fields']
    export const isproducts_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is products_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_stddev_samp_fields"')
      return products_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_sum_fields_possibleTypes: string[] = ['products_sum_fields']
    export const isproducts_sum_fields = (obj?: { __typename?: any } | null): obj is products_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_sum_fields"')
      return products_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_var_pop_fields_possibleTypes: string[] = ['products_var_pop_fields']
    export const isproducts_var_pop_fields = (obj?: { __typename?: any } | null): obj is products_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_var_pop_fields"')
      return products_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_var_samp_fields_possibleTypes: string[] = ['products_var_samp_fields']
    export const isproducts_var_samp_fields = (obj?: { __typename?: any } | null): obj is products_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_var_samp_fields"')
      return products_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const products_variance_fields_possibleTypes: string[] = ['products_variance_fields']
    export const isproducts_variance_fields = (obj?: { __typename?: any } | null): obj is products_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isproducts_variance_fields"')
      return products_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    

export const enumCompaniesConstraint = {
   companies_name_key: 'companies_name_key' as const,
   companies_pkey: 'companies_pkey' as const
}

export const enumCompaniesSelectColumn = {
   ceo: 'ceo' as const,
   created_at: 'created_at' as const,
   founded_year: 'founded_year' as const,
   id: 'id' as const,
   name: 'name' as const,
   type: 'type' as const,
   updated_at: 'updated_at' as const
}

export const enumCompaniesUpdateColumn = {
   ceo: 'ceo' as const,
   created_at: 'created_at' as const,
   founded_year: 'founded_year' as const,
   id: 'id' as const,
   name: 'name' as const,
   type: 'type' as const,
   updated_at: 'updated_at' as const
}

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumMoonsConstraint = {
   moons_name_key: 'moons_name_key' as const,
   moons_pkey: 'moons_pkey' as const
}

export const enumMoonsSelectColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   name: 'name' as const,
   planet_id: 'planet_id' as const,
   updated_at: 'updated_at' as const
}

export const enumMoonsUpdateColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   name: 'name' as const,
   planet_id: 'planet_id' as const,
   updated_at: 'updated_at' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumPlanetsConstraint = {
   planets_name_key: 'planets_name_key' as const,
   planets_pkey: 'planets_pkey' as const
}

export const enumPlanetsSelectColumn = {
   created_at: 'created_at' as const,
   geology_content: 'geology_content' as const,
   geology_source: 'geology_source' as const,
   id: 'id' as const,
   name: 'name' as const,
   overview_content: 'overview_content' as const,
   overview_source: 'overview_source' as const,
   radius: 'radius' as const,
   revolution: 'revolution' as const,
   rotation: 'rotation' as const,
   structure_content: 'structure_content' as const,
   structure_source: 'structure_source' as const,
   temperature: 'temperature' as const,
   updated_at: 'updated_at' as const
}

export const enumPlanetsUpdateColumn = {
   created_at: 'created_at' as const,
   geology_content: 'geology_content' as const,
   geology_source: 'geology_source' as const,
   id: 'id' as const,
   name: 'name' as const,
   overview_content: 'overview_content' as const,
   overview_source: 'overview_source' as const,
   radius: 'radius' as const,
   revolution: 'revolution' as const,
   rotation: 'rotation' as const,
   structure_content: 'structure_content' as const,
   structure_source: 'structure_source' as const,
   temperature: 'temperature' as const,
   updated_at: 'updated_at' as const
}

export const enumProductsConstraint = {
   products_pkey: 'products_pkey' as const
}

export const enumProductsSelectColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   manufacturer_id: 'manufacturer_id' as const,
   name: 'name' as const,
   updated_at: 'updated_at' as const
}

export const enumProductsUpdateColumn = {
   created_at: 'created_at' as const,
   id: 'id' as const,
   manufacturer_id: 'manufacturer_id' as const,
   name: 'name' as const,
   updated_at: 'updated_at' as const
}
