var app = angular.module('app1.module',[]);
app.controller('myapp',function($scope){
$scope.val= $('#val').val();  
	$scope.data1=[
	{flightNumber:"001245",
	 date:"25/2/2017",
	 takeoffs:"12:25",
	 landing:"3:30",
	 from:"Qairo",
	 image:"Sydney.jpg",
	 to:"Sydney",
	 pilotsName:"Muhammad Masaid",
	 seats:215,
	 emptyseats:10,
	 flightcompany:"Egyptians airline"
	},
	{flightNumber:"001255",
	 date:"23/2/2017",
	 takeoffs:"22:10",
	 landing:"2:20",
	 from:"Amman",
	 image:"Tokyo.jpg",
	 to:"Tokyo",
	 pilotsName:"Abdul Al-azeez",
	 seats:310,
	 emptyseats:2,
	 flightcompany:"Japanese airline"
	},
	 {flightNumber:"001232",
	 date:"15/3/2017",
	 takeoffs:"4:50",
	 landing:"6:15",
	 from:"Madred",
	 image:"New york.jpg",
	 to:"New york",
	 pilotsName:"Ahmad Shamasneh",
	 seats:150,
	 emptyseats:0,
	 flightcompany:"Amarican airline"
	},
	 {flightNumber:"001134",
	 date:"1/9/2017",
	 takeoffs:"7:45",
	 landing:"10:45",
	 from:"Newyork",
	 image:"Paris.jpg",
	 to:"Paris",
	 pilotsName:"Abu Baker",
	 seats:300,
	 emptyseats:14,
	 flightcompany:"Frinsh airline"
	},
	{flightNumber:"002139",
	 date:"10/9/2017",
	 takeoffs:"7:430",
	 landing:"15:45",
	 from:"Paris",
	 image:"London.jpg",
	 to:"London",
	 pilotsName:"Fatima Himmami",
	 seats:130,
	 emptyseats:5,
	 flightcompany:"England for airline"
	},
	{flightNumber:"003154",
	 date:"3/2/2017",
	 takeoffs:"8:45",
	 landing:"13:45",
	 from:"Newyork",
	 image:"Munich.jpg",
	 to:"Munich",
	 pilotsName:"Ahmad Shamasneh ",
	 seats:210,
	 emptyseats:12,
	 flightcompany:"Germania for airline"
	},
	{flightNumber:"005154",
	 date:"9/12/2017",
	 takeoffs:"22:45",
	 landing:"1:25",
	 from:"London",
	 image:"Hamburg.jpg",
	 to:"Hamburg",
	 pilotsName:"Muhannad Bakkar",
	 seats:130,
	 emptyseats:16,
	 flightcompany:"England for airline"
	},
	{flightNumber:"005154",
	 date:"18/7/2017",
	 takeoffs:"8:45",
	 landing:"13:45",
	 from:"Newyork",
	 image:"Manchester.jpg",
	 to:"Manchester",
	 pilotsName:"Waleed Nemreeny",
	 seats:195,
	 emptyseats:8,
	 flightcompany:"Germania for airline"
	},
	{flightNumber:"002134",
	 date:"19/5/2017",
	 takeoffs:"8:45",
	 landing:"13:45",
	 from:"Newyork",
	 image:"Roma.jpg",
	 to:"Roma",
	 pilotsName:"Muhannad Bakkar ",
	 seats:450,
	 emptyseats:50,
	 flightcompany:"Italian airline"
	},
	{flightNumber:"004654",
	 date:"10/5/2017",
	 takeoffs:"8:45",
	 landing:"16:00",
	 from:"Newyork",
	 image:"Venice.jpg",
	 to:"Venice",
	 pilotsName:"Fatima Himmami",
	 seats:250,
	 emptyseats:64,
	 flightcompany:"Italian airline"
	}
	];
	$scope.user = [
	{
		username:"Ahmad",
		Passworde:1234567
	},
	{
		username:"Maher",
		Passworde:12345
	},
	{
		username:"Mohammad",
		Passworde:123
	}
	]
	

console.log($scope.data1)


	$scope.ok=function(){
		$scope.val= $('#val').val();
		console.log($scope.val)
	}
	console.log($scope.val);
})