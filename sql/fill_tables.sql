INSERT INTO public.product(
	id, name, price)
	VALUES
    (1, 'Product 1', 34),
    (2, 'Product 2', 3),
    (3, 'Product 3', 76),
    (4, 'Product 4', 123),
    (5, 'Product 5', 88);

INSERT INTO public."order"(
	id, "number")
	VALUES
    (1, 1001),
		(2, 1002);

INSERT INTO public.item(
	id, amount, "productId", "orderId")
	VALUES
		(1, 2, 1, 1),
		(2, 3, 2, 1),
		(3, 2, 5, 1),
		(4, 11, 3, 2),
		(5, 8, 4, 2),
		(6, 1, 5, 2);