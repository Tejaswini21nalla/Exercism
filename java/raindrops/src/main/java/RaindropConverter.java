class RaindropConverter {

    String convert(int number) {
        String retval="";
	if(number%3==0)
	{
		retval=retval+"Pling";
	}
	if(number%5==0)
	{
		retval=retval+"Plang";
	}
	if(number%7==0)
	{
		retval=retval+"Plong";
	}
	if(number%3!=0&&number%5!=0&&number%7!=0)
	{
		retval=retval+String.valueOf(number);
	}
	return retval;
		
    }

}
