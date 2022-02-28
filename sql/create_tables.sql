-- SEQUENCE: public.product_id_seq

-- DROP SEQUENCE IF EXISTS public."product_id_seq";

CREATE SEQUENCE IF NOT EXISTS public."product_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public."product_id_seq"
    OWNER TO postgres;

-- Table: public.product

-- DROP TABLE IF EXISTS public.product;

CREATE TABLE IF NOT EXISTS public.product
(
    id integer NOT NULL DEFAULT nextval('product_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    price integer NOT NULL,
    CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.product
    OWNER to postgres;

-- SEQUENCE: public.order_id_seq

-- DROP SEQUENCE IF EXISTS public."order_id_seq";

CREATE SEQUENCE IF NOT EXISTS public."order_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public."order_id_seq"
    OWNER TO postgres;

-- Table: public.order

-- DROP TABLE IF EXISTS public."order";

CREATE TABLE IF NOT EXISTS public."order"
(
    id integer NOT NULL DEFAULT nextval('order_id_seq'::regclass),
    "number" integer NOT NULL,
    CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."order"
    OWNER to postgres;

-- SEQUENCE: public.item_id_seq

-- DROP SEQUENCE IF EXISTS public."item_id_seq";

CREATE SEQUENCE IF NOT EXISTS public."item_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public."item_id_seq"
    OWNER TO postgres;

-- Table: public.item

-- DROP TABLE IF EXISTS public.item;

CREATE TABLE IF NOT EXISTS public.item
(
    id integer NOT NULL DEFAULT nextval('item_id_seq'::regclass),
    amount integer NOT NULL,
    "productId" integer NOT NULL,
    "orderId" integer NOT NULL,
    CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY (id),
    CONSTRAINT "FK_950e218c17c81d5a9ffa1b96080" FOREIGN KEY ("orderId")
        REFERENCES public."order" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "FK_ab25455f602addda94c12635c60" FOREIGN KEY ("productId")
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.item
    OWNER to postgres;