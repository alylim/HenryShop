﻿using System;

public class OrderDetail
{
	public OrderDetail()
	{
		Id = new Guid();
	}
	public Guid Id { get; set; }
	public Guid ActivationId { get; set; }
	public virtual Guid OrderId { get; set; }
}
