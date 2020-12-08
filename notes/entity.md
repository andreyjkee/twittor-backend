# Column types for postgres
int, int2, int4, int8, smallint, integer, bigint, decimal, numeric, real, float, float4, float8, double precision, money, character varying, varchar, character, char, text, citext, hstore, bytea, bit, varbit, bit varying, timetz, timestamptz, timestamp, timestamp without time zone, timestamp with time zone, date, time, time without time zone, time with time zone, interval, bool, boolean, enum, point, line, lseg, box, path, polygon, circle, cidr, inet, macaddr, tsvector, tsquery, uuid, xml, json, jsonb, int4range, int8range, numrange, tsrange, tstzrange, daterange, geometry, geography, cube, ltree

# Column options
update: boolean - Indicates if column value is updated by "save" operation. If false, you'll be able to write this value only when you first time insert the object. Default value is true.

select: boolean - Defines whether or not to hide this column by default when making queries. When set to false, the column data will not show with a standard query. By default column is select: true

default: string - Adds database-level column's DEFAULT value.

# Relation options
There are several options you can specify for relations:

eager: boolean - If set to true, the relation will always be loaded with the main entity when using find* methods or QueryBuilder on this entity
cascade: boolean | ("insert" | "update")[] - If set to true, the related object will be inserted and updated in the database. You can also specify an array of cascade options.
onDelete: "RESTRICT"|"CASCADE"|"SET NULL" - specifies how foreign key should behave when referenced object is deleted
primary: boolean - Indicates whether this relation's column will be a primary column or not.
nullable: boolean - Indicates whether this relation's column is nullable or not. By default it is nullable.

