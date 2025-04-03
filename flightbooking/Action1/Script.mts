
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_1890019848_;_script infofile_;_ZIP::ssf25.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "678a1356086569b600ea" @@ hightlight id_;_2097746520_;_script infofile_;_ZIP::ssf26.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1890021960_;_script infofile_;_ZIP::ssf27.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("p_fromcity", dtGlobalSheet) @@ hightlight id_;_2110423088_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("p_tocity", dtGlobalSheet) @@ hightlight id_;_2110429904_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("p_Date", dtGlobalSheet) @@ hightlight id_;_2110429664_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1894888120_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("p_tickets", dtGlobalSheet) @@ hightlight id_;_2110431296_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1894893112_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_2128956696_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2109351296_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("p_passenger", dtGlobalSheet) @@ hightlight id_;_2110434800_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2109343808_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order _num").Check CheckPoint("Order 983 completed") @@ hightlight id_;_2108141016_;_script infofile_;_ZIP::ssf22.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order _num").Output CheckPoint("Order_number_out") @@ hightlight id_;_2065734504_;_script infofile_;_ZIP::ssf24.xml_;_

WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click @@ hightlight id_;_2104004104_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close

