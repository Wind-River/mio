var N=null,E="",T="t",U="u",searchIndex={};
var R=["interest","registry","duration","result","token","is_readable","is_writable","is_aio","is_lio","events","register","reregister","deregister","tcplistener","socketaddr","try_clone","tcpstream","from_std","local_addr","Creates a new independently owned handle to the underlying…","shutdown","Sets the value for the `IP_TTL` option on this socket.","Gets the value of the `IP_TTL` option for this socket.","take_error","Get the value of the `SO_ERROR` option on this socket.","option","udpsocket","Receives data from the socket, without removing it from…","set_ttl","ipv4addr","ipv6addr","unixdatagram","connect","peer_addr","recv_from","Receives data from the socket.","unixlistener","Returns the local socket address of this listener.","Returns the value of the `SO_ERROR` option.","unixstream","Shuts down the read, write, or both halves of this…","try_from","try_into","borrow_mut","type_id","to_owned","clone_into","borrow","typeid","mio::unix","mio::event","mio::net","ordering","partial_cmp","formatter","read_vectored","write_vectored","into_raw_fd","as_raw_fd","from_raw_fd","Interest","Registry","TcpListener","TcpStream","UdpSocket","UnixDatagram","UnixListener","UnixStream","SourceFd","SocketAddr"];

searchIndex["mio"]={"doc":"Mio is a fast, low-level I/O library for Rust focusing on…","i":[[3,R[60],"mio","Interest used in registering.",N,N],[3,"Poll",E,"Polls for readiness events on all registered values.",N,N],[3,R[61],E,"Registers I/O resources.",N,N],[3,"Token",E,"Associates readiness events with [`event::Source`]s.",N,N],[12,"0",E,E,0,N],[3,"Waker",E,"Waker allows cross-thread waking of [`Poll`].",N,N],[18,"READABLE",E,"Returns a `Interest` set representing readable interests.",1,N],[18,"WRITABLE",E,"Returns a `Interest` set representing writable interests.",1,N],[11,"add",E,"Add together two `Interest`.",1,[[[R[0]]],[R[0]]]],[11,R[5],E,"Returns true if the value includes readable readiness.",1,[[],["bool"]]],[11,R[6],E,"Returns true if the value includes writable readiness.",1,[[],["bool"]]],[11,R[7],E,"Returns true if `Interest` contains AIO readiness",1,[[],["bool"]]],[11,R[8],E,"Returns true if `Interest` contains LIO readiness",1,[[],["bool"]]],[11,"new",E,"Return a new `Poll` handle.",2,[[],[["poll"],[R[3],["poll"]]]]],[11,R[1],E,"Create a separate `Registry` which can be used to register…",2,[[["self"]],[R[1]]]],[11,"poll",E,"Wait for readiness events",2,[[["self"],[R[9]],[R[25],[R[2]]],[R[2]]],[R[3]]]],[11,R[10],E,"Register an [`event::Source`] with the `Poll` instance.",3,[[["self"],["s"],[R[0]],[R[4]]],[R[3]]]],[11,R[11],E,"Re-register an [`event::Source`] with the `Poll` instance.",3,[[["self"],["s"],[R[0]],[R[4]]],[R[3]]]],[11,R[12],E,"Deregister an [`event::Source`] with the `Poll` instance.",3,[[["self"],["s"]],[R[3]]]],[11,R[15],E,"Creates a new independently owned `Registry`.",3,[[["self"]],[[R[1]],[R[3],[R[1]]]]]],[11,"new",E,"Create a new `Waker`.",4,[[[R[4]],[R[1]]],[["waker"],[R[3],["waker"]]]]],[11,"wake",E,"Wake up the [`Poll`] associated with this `Waker`.",4,[[["self"]],[R[3]]]],[0,"event",E,"Readiness event types and utilities.",N,N],[3,"Event",R[50],"A readiness event.",N,N],[3,"Events",E,"A collection of readiness events.",N,N],[3,"Iter",E,"[`Events`] iterator.",N,N],[11,R[4],E,"Returns the event's token.",5,[[["self"]],[R[4]]]],[11,R[5],E,"Returns true if the event contains readable readiness.",5,[[["self"]],["bool"]]],[11,R[6],E,"Returns true if the event contains writable readiness.",5,[[["self"]],["bool"]]],[11,"is_error",E,"Returns true if the event contains error readiness.",5,[[["self"]],["bool"]]],[11,"is_read_closed",E,"Returns true if the event contains read closed readiness.",5,[[["self"]],["bool"]]],[11,"is_write_closed",E,"Returns true if the event contains write closed readiness.",5,[[["self"]],["bool"]]],[11,"is_priority",E,"Returns true if the event contains priority readiness.",5,[[["self"]],["bool"]]],[11,R[7],E,"Returns true if the event contains AIO readiness.",5,[[["self"]],["bool"]]],[11,R[8],E,"Returns true if the event contains LIO readiness.",5,[[["self"]],["bool"]]],[11,"with_capacity",E,"Return a new `Events` capable of holding up to `capacity`…",6,[[["usize"]],[R[9]]]],[11,"capacity",E,"Returns the number of `Event` values that `self` can hold.",6,[[["self"]],["usize"]]],[11,"is_empty",E,"Returns `true` if `self` contains no `Event` values.",6,[[["self"]],["bool"]]],[11,"iter",E,"Returns an iterator over the `Event` values.",6,[[["self"]],["iter"]]],[11,"clear",E,"Clearing all `Event` values from container explicitly.",6,[[["self"]]]],[8,"Source",E,"An event source that may be registered with [`Registry`].",N,N],[10,R[10],E,"Register `self` with the given `Registry` instance.",7,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[10,R[11],E,"Re-register `self` with the given `Registry` instance.",7,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[10,R[12],E,"Deregister `self` from the given `Registry` instance.",7,[[["self"],[R[1]]],[R[3]]]],[0,"net","mio","Networking primitives",N,N],[3,R[62],R[51],"A structure representing a socket server",N,N],[3,R[63],E,"A non-blocking TCP stream between a local socket and a…",N,N],[3,R[64],E,"A User Datagram Protocol socket.",N,N],[3,R[65],E,"A Unix datagram socket.",N,N],[3,R[66],E,"A non-blocking Unix domain socket server.",N,N],[3,R[67],E,"A non-blocking Unix stream socket.",N,N],[11,"bind",E,"Convenience method to bind a new TCP listener to the…",8,[[[R[14]]],[[R[13]],[R[3],[R[13]]]]]],[11,R[17],E,"Creates a new `TcpListener` from a standard…",8,[[[R[13]]],[R[13]]]],[11,"accept",E,"Accepts a new `TcpStream`.",8,[[["self"]],[R[3]]]],[11,R[18],E,R[37],8,[[["self"]],[[R[3],[R[14]]],[R[14]]]]],[11,R[15],E,R[19],8,[[["self"]],[[R[13]],[R[3],[R[13]]]]]],[11,R[28],E,R[21],8,[[["self"],["u32"]],[R[3]]]],[11,"ttl",E,R[22],8,[[["self"]],[[R[3],["u32"]],["u32"]]]],[11,R[23],E,R[24],8,[[["self"]],[[R[25],["error"]],[R[3],[R[25]]]]]],[11,R[32],E,"Create a new TCP stream and issue a non-blocking connect…",9,[[[R[14]]],[[R[3],[R[16]]],[R[16]]]]],[11,R[17],E,"Creates a new `TcpStream` from a standard `net::TcpStream`.",9,[[[R[16]]],[R[16]]]],[11,R[33],E,"Returns the socket address of the remote peer of this TCP…",9,[[["self"]],[[R[3],[R[14]]],[R[14]]]]],[11,R[18],E,"Returns the socket address of the local half of this TCP…",9,[[["self"]],[[R[3],[R[14]]],[R[14]]]]],[11,R[15],E,R[19],9,[[["self"]],[[R[3],[R[16]]],[R[16]]]]],[11,R[20],E,R[40],9,[[["self"],[R[20]]],[R[3]]]],[11,"set_nodelay",E,"Sets the value of the `TCP_NODELAY` option on this socket.",9,[[["self"],["bool"]],[R[3]]]],[11,"nodelay",E,"Gets the value of the `TCP_NODELAY` option on this socket.",9,[[["self"]],[["bool"],[R[3],["bool"]]]]],[11,R[28],E,R[21],9,[[["self"],["u32"]],[R[3]]]],[11,"ttl",E,R[22],9,[[["self"]],[[R[3],["u32"]],["u32"]]]],[11,R[23],E,R[24],9,[[["self"]],[[R[25],["error"]],[R[3],[R[25]]]]]],[11,"peek",E,"Receives data on the socket from the remote address to…",9,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"bind",E,"Creates a UDP socket from the given address.",10,[[[R[14]]],[[R[3],[R[26]]],[R[26]]]]],[11,R[17],E,"Creates a new `UdpSocket` from a standard `net::UdpSocket`.",10,[[[R[26]]],[R[26]]]],[11,R[18],E,"Returns the socket address that this socket was created…",10,[[["self"]],[[R[3],[R[14]]],[R[14]]]]],[11,R[15],E,R[19],10,[[["self"]],[[R[3],[R[26]]],[R[26]]]]],[11,"send_to",E,"Sends data on the socket to the given address. On success,…",10,[[["self"],[R[14]]],[[R[3],["usize"]],["usize"]]]],[11,R[34],E,"Receives data from the socket. On success, returns the…",10,[[["self"]],[R[3]]]],[11,"peek_from",E,R[27],10,[[["self"]],[R[3]]]],[11,"send",E,"Sends data on the socket to the address previously bound…",10,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"recv",E,"Receives data from the socket previously bound with…",10,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"peek",E,R[27],10,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,R[32],E,"Connects the UDP socket setting the default destination…",10,[[["self"],[R[14]]],[R[3]]]],[11,"set_broadcast",E,"Sets the value of the `SO_BROADCAST` option for this socket.",10,[[["self"],["bool"]],[R[3]]]],[11,"broadcast",E,"Gets the value of the `SO_BROADCAST` option for this socket.",10,[[["self"]],[["bool"],[R[3],["bool"]]]]],[11,"set_multicast_loop_v4",E,"Sets the value of the `IP_MULTICAST_LOOP` option for this…",10,[[["self"],["bool"]],[R[3]]]],[11,"multicast_loop_v4",E,"Gets the value of the `IP_MULTICAST_LOOP` option for this…",10,[[["self"]],[["bool"],[R[3],["bool"]]]]],[11,"set_multicast_ttl_v4",E,"Sets the value of the `IP_MULTICAST_TTL` option for this…",10,[[["self"],["u32"]],[R[3]]]],[11,"multicast_ttl_v4",E,"Gets the value of the `IP_MULTICAST_TTL` option for this…",10,[[["self"]],[[R[3],["u32"]],["u32"]]]],[11,"set_multicast_loop_v6",E,"Sets the value of the `IPV6_MULTICAST_LOOP` option for…",10,[[["self"],["bool"]],[R[3]]]],[11,"multicast_loop_v6",E,"Gets the value of the `IPV6_MULTICAST_LOOP` option for…",10,[[["self"]],[["bool"],[R[3],["bool"]]]]],[11,R[28],E,R[21],10,[[["self"],["u32"]],[R[3]]]],[11,"ttl",E,R[22],10,[[["self"]],[[R[3],["u32"]],["u32"]]]],[11,"join_multicast_v4",E,"Executes an operation of the `IP_ADD_MEMBERSHIP` type.",10,[[["self"],[R[29]]],[R[3]]]],[11,"join_multicast_v6",E,"Executes an operation of the `IPV6_ADD_MEMBERSHIP` type.",10,[[["self"],["u32"],[R[30]]],[R[3]]]],[11,"leave_multicast_v4",E,"Executes an operation of the `IP_DROP_MEMBERSHIP` type.",10,[[["self"],[R[29]]],[R[3]]]],[11,"leave_multicast_v6",E,"Executes an operation of the `IPV6_DROP_MEMBERSHIP` type.",10,[[["self"],["u32"],[R[30]]],[R[3]]]],[11,R[23],E,R[24],10,[[["self"]],[[R[25],["error"]],[R[3],[R[25]]]]]],[11,"bind",E,"Creates a Unix datagram socket bound to the given path.",11,[[["asref",["path"]],["path"]],[[R[3],[R[31]]],[R[31]]]]],[11,R[17],E,"Creates a new `UnixDatagram` from a standard…",11,[[[R[31]]],[R[31]]]],[11,R[32],E,"Connects the socket to the specified address.",11,[[["self"],["asref",["path"]],["path"]],[R[3]]]],[11,"unbound",E,"Creates a Unix Datagram socket which is not bound to any…",11,[[],[[R[3],[R[31]]],[R[31]]]]],[11,"pair",E,"Create an unnamed pair of connected sockets.",11,[[],[R[3]]]],[11,R[15],E,R[19],11,[[["self"]],[[R[3],[R[31]]],[R[31]]]]],[11,R[18],E,"Returns the address of this socket.",11,[[["self"]],[[R[14]],[R[3],[R[14]]]]]],[11,R[33],E,"Returns the address of this socket's peer.",11,[[["self"]],[[R[14]],[R[3],[R[14]]]]]],[11,R[34],E,R[35],11,[[["self"]],[R[3]]]],[11,"recv",E,R[35],11,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"send_to",E,"Sends data on the socket to the specified address.",11,[[["self"],["asref",["path"]],["path"]],[[R[3],["usize"]],["usize"]]]],[11,"send",E,"Sends data on the socket to the socket's peer.",11,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,R[23],E,R[38],11,[[["self"]],[[R[25],["error"]],[R[3],[R[25]]]]]],[11,R[20],E,"Shut down the read, write, or both halves of this…",11,[[["self"],[R[20]]],[R[3]]]],[11,"bind",E,"Creates a new `UnixListener` bound to the specified socket.",12,[[["asref",["path"]],["path"]],[[R[3],[R[36]]],[R[36]]]]],[11,R[17],E,"Creates a new `UnixListener` from a standard…",12,[[[R[36]]],[R[36]]]],[11,"accept",E,"Accepts a new incoming connection to this listener.",12,[[["self"]],[R[3]]]],[11,R[15],E,R[19],12,[[["self"]],[[R[3],[R[36]]],[R[36]]]]],[11,R[18],E,R[37],12,[[["self"]],[[R[14]],[R[3],[R[14]]]]]],[11,R[23],E,R[38],12,[[["self"]],[[R[25],["error"]],[R[3],[R[25]]]]]],[11,R[32],E,"Connects to the socket named by `path`.",13,[[["asref",["path"]],["path"]],[[R[3],[R[39]]],[R[39]]]]],[11,R[17],E,"Creates a new `UnixStream` from a standard…",13,[[[R[39]]],[R[39]]]],[11,"pair",E,"Creates an unnamed pair of connected sockets.",13,[[],[R[3]]]],[11,R[15],E,R[19],13,[[["self"]],[[R[3],[R[39]]],[R[39]]]]],[11,R[18],E,"Returns the socket address of the local half of this…",13,[[["self"]],[[R[14]],[R[3],[R[14]]]]]],[11,R[33],E,"Returns the socket address of the remote half of this…",13,[[["self"]],[[R[14]],[R[3],[R[14]]]]]],[11,R[23],E,R[38],13,[[["self"]],[[R[25],["error"]],[R[3],[R[25]]]]]],[11,R[20],E,R[40],13,[[["self"],[R[20]]],[R[3]]]],[0,"unix","mio","Unix only extensions.",N,N],[3,R[69],R[49],"An address associated with a `mio` specific Unix socket.",N,N],[3,R[68],E,"Adapter for [`RawFd`] providing an [`event::Source`]…",N,N],[12,"0",E,E,14,N],[11,R[45],"mio",E,1,[[["self"]],[T]]],[11,R[46],E,E,1,[[["self"],[T]]]],[11,"into",E,E,1,[[],[U]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[41],E,E,1,[[[U]],[R[3]]]],[11,R[42],E,E,1,[[],[R[3]]]],[11,R[43],E,E,1,[[["self"]],[T]]],[11,R[47],E,E,1,[[["self"]],[T]]],[11,R[44],E,E,1,[[["self"]],[R[48]]]],[11,"into",E,E,2,[[],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[41],E,E,2,[[[U]],[R[3]]]],[11,R[42],E,E,2,[[],[R[3]]]],[11,R[43],E,E,2,[[["self"]],[T]]],[11,R[47],E,E,2,[[["self"]],[T]]],[11,R[44],E,E,2,[[["self"]],[R[48]]]],[11,"into",E,E,3,[[],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[41],E,E,3,[[[U]],[R[3]]]],[11,R[42],E,E,3,[[],[R[3]]]],[11,R[43],E,E,3,[[["self"]],[T]]],[11,R[47],E,E,3,[[["self"]],[T]]],[11,R[44],E,E,3,[[["self"]],[R[48]]]],[11,R[45],E,E,0,[[["self"]],[T]]],[11,R[46],E,E,0,[[["self"],[T]]]],[11,"into",E,E,0,[[],[U]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[41],E,E,0,[[[U]],[R[3]]]],[11,R[42],E,E,0,[[],[R[3]]]],[11,R[43],E,E,0,[[["self"]],[T]]],[11,R[47],E,E,0,[[["self"]],[T]]],[11,R[44],E,E,0,[[["self"]],[R[48]]]],[11,"into",E,E,4,[[],[U]]],[11,"from",E,E,4,[[[T]],[T]]],[11,R[41],E,E,4,[[[U]],[R[3]]]],[11,R[42],E,E,4,[[],[R[3]]]],[11,R[43],E,E,4,[[["self"]],[T]]],[11,R[47],E,E,4,[[["self"]],[T]]],[11,R[44],E,E,4,[[["self"]],[R[48]]]],[11,"into",R[49],E,14,[[],[U]]],[11,"from",E,E,14,[[[T]],[T]]],[11,R[41],E,E,14,[[[U]],[R[3]]]],[11,R[42],E,E,14,[[],[R[3]]]],[11,R[43],E,E,14,[[["self"]],[T]]],[11,R[47],E,E,14,[[["self"]],[T]]],[11,R[44],E,E,14,[[["self"]],[R[48]]]],[11,"into",E,E,15,[[],[U]]],[11,"from",E,E,15,[[[T]],[T]]],[11,R[41],E,E,15,[[[U]],[R[3]]]],[11,R[42],E,E,15,[[],[R[3]]]],[11,R[43],E,E,15,[[["self"]],[T]]],[11,R[47],E,E,15,[[["self"]],[T]]],[11,R[44],E,E,15,[[["self"]],[R[48]]]],[11,"into",R[50],E,5,[[],[U]]],[11,"from",E,E,5,[[[T]],[T]]],[11,R[41],E,E,5,[[[U]],[R[3]]]],[11,R[42],E,E,5,[[],[R[3]]]],[11,R[43],E,E,5,[[["self"]],[T]]],[11,R[47],E,E,5,[[["self"]],[T]]],[11,R[44],E,E,5,[[["self"]],[R[48]]]],[11,"into",E,E,6,[[],[U]]],[11,"from",E,E,6,[[[T]],[T]]],[11,R[41],E,E,6,[[[U]],[R[3]]]],[11,R[42],E,E,6,[[],[R[3]]]],[11,R[43],E,E,6,[[["self"]],[T]]],[11,R[47],E,E,6,[[["self"]],[T]]],[11,R[44],E,E,6,[[["self"]],[R[48]]]],[11,R[45],E,E,16,[[["self"]],[T]]],[11,R[46],E,E,16,[[["self"],[T]]]],[11,"into",E,E,16,[[],[U]]],[11,"into_iter",E,E,16,[[],["i"]]],[11,"from",E,E,16,[[[T]],[T]]],[11,R[41],E,E,16,[[[U]],[R[3]]]],[11,R[42],E,E,16,[[],[R[3]]]],[11,R[43],E,E,16,[[["self"]],[T]]],[11,R[47],E,E,16,[[["self"]],[T]]],[11,R[44],E,E,16,[[["self"]],[R[48]]]],[11,"into",R[51],E,8,[[],[U]]],[11,"from",E,E,8,[[[T]],[T]]],[11,R[41],E,E,8,[[[U]],[R[3]]]],[11,R[42],E,E,8,[[],[R[3]]]],[11,R[43],E,E,8,[[["self"]],[T]]],[11,R[47],E,E,8,[[["self"]],[T]]],[11,R[44],E,E,8,[[["self"]],[R[48]]]],[11,"into",E,E,9,[[],[U]]],[11,"from",E,E,9,[[[T]],[T]]],[11,R[41],E,E,9,[[[U]],[R[3]]]],[11,R[42],E,E,9,[[],[R[3]]]],[11,R[43],E,E,9,[[["self"]],[T]]],[11,R[47],E,E,9,[[["self"]],[T]]],[11,R[44],E,E,9,[[["self"]],[R[48]]]],[11,"into",E,E,10,[[],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[41],E,E,10,[[[U]],[R[3]]]],[11,R[42],E,E,10,[[],[R[3]]]],[11,R[43],E,E,10,[[["self"]],[T]]],[11,R[47],E,E,10,[[["self"]],[T]]],[11,R[44],E,E,10,[[["self"]],[R[48]]]],[11,"into",E,E,11,[[],[U]]],[11,"from",E,E,11,[[[T]],[T]]],[11,R[41],E,E,11,[[[U]],[R[3]]]],[11,R[42],E,E,11,[[],[R[3]]]],[11,R[43],E,E,11,[[["self"]],[T]]],[11,R[47],E,E,11,[[["self"]],[T]]],[11,R[44],E,E,11,[[["self"]],[R[48]]]],[11,"into",E,E,12,[[],[U]]],[11,"from",E,E,12,[[[T]],[T]]],[11,R[41],E,E,12,[[[U]],[R[3]]]],[11,R[42],E,E,12,[[],[R[3]]]],[11,R[43],E,E,12,[[["self"]],[T]]],[11,R[47],E,E,12,[[["self"]],[T]]],[11,R[44],E,E,12,[[["self"]],[R[48]]]],[11,"into",E,E,13,[[],[U]]],[11,"from",E,E,13,[[[T]],[T]]],[11,R[41],E,E,13,[[[U]],[R[3]]]],[11,R[42],E,E,13,[[],[R[3]]]],[11,R[43],E,E,13,[[["self"]],[T]]],[11,R[47],E,E,13,[[["self"]],[T]]],[11,R[44],E,E,13,[[["self"]],[R[48]]]],[11,R[10],R[49],E,14,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[11],E,E,14,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[12],E,E,14,[[["self"],[R[1]]],[R[3]]]],[11,R[10],R[51],E,8,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[11],E,E,8,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[12],E,E,8,[[["self"],[R[1]]],[R[3]]]],[11,R[10],E,E,9,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[11],E,E,9,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[12],E,E,9,[[["self"],[R[1]]],[R[3]]]],[11,R[10],E,E,10,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[11],E,E,10,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[12],E,E,10,[[["self"],[R[1]]],[R[3]]]],[11,R[10],E,E,11,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[11],E,E,11,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[12],E,E,11,[[["self"],[R[1]]],[R[3]]]],[11,R[10],E,E,12,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[11],E,E,12,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[12],E,E,12,[[["self"],[R[1]]],[R[3]]]],[11,R[10],E,E,13,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[11],E,E,13,[[["self"],[R[0]],[R[4]],[R[1]]],[R[3]]]],[11,R[12],E,E,13,[[["self"],[R[1]]],[R[3]]]],[11,"clone","mio",E,1,[[["self"]],[R[0]]]],[11,"clone",E,E,0,[[["self"]],[R[4]]]],[11,"clone",R[50],E,16,[[["self"]],["iter"]]],[11,R[53],"mio",E,1,[[["self"],[R[0]]],[[R[25],[R[52]]],[R[52]]]]],[11,"lt",E,E,1,[[["self"],[R[0]]],["bool"]]],[11,"le",E,E,1,[[["self"],[R[0]]],["bool"]]],[11,"gt",E,E,1,[[["self"],[R[0]]],["bool"]]],[11,"ge",E,E,1,[[["self"],[R[0]]],["bool"]]],[11,R[53],E,E,0,[[["self"],[R[4]]],[[R[25],[R[52]]],[R[52]]]]],[11,"lt",E,E,0,[[["self"],[R[4]]],["bool"]]],[11,"le",E,E,0,[[["self"],[R[4]]],["bool"]]],[11,"gt",E,E,0,[[["self"],[R[4]]],["bool"]]],[11,"ge",E,E,0,[[["self"],[R[4]]],["bool"]]],[11,"eq",E,E,1,[[["self"],[R[0]]],["bool"]]],[11,"ne",E,E,1,[[["self"],[R[0]]],["bool"]]],[11,"eq",E,E,0,[[["self"],[R[4]]],["bool"]]],[11,"ne",E,E,0,[[["self"],[R[4]]],["bool"]]],[11,"cmp",E,E,1,[[["self"],[R[0]]],[R[52]]]],[11,"cmp",E,E,0,[[["self"],[R[4]]],[R[52]]]],[11,"next",R[50],E,16,[[["self"]],[R[25]]]],[11,"hash","mio",E,0,[[["self"],["__h"]]]],[11,"bitor",E,E,1,[[],["self"]]],[11,"bitor_assign",E,E,1,[[["self"]]]],[11,"fmt",E,E,1,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,2,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,3,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",R[49],E,14,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,15,[[["self"],[R[54]]],[R[3]]]],[11,"fmt","mio",E,0,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,4,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",R[50],E,5,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,16,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,6,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",R[51],E,8,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,9,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,10,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,11,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,12,[[["self"],[R[54]]],[R[3]]]],[11,"fmt",E,E,13,[[["self"],[R[54]]],[R[3]]]],[11,"read",E,E,9,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,R[55],E,E,9,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"read",E,E,13,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,R[55],E,E,13,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"write",E,E,9,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,R[56],E,E,9,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,9,[[["self"]],[R[3]]]],[11,"write",E,E,13,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,R[56],E,E,13,[[["self"]],[[R[3],["usize"]],["usize"]]]],[11,"flush",E,E,13,[[["self"]],[R[3]]]],[11,R[57],E,E,8,[[],["rawfd"]]],[11,R[57],E,E,9,[[],["rawfd"]]],[11,R[57],E,E,10,[[],["rawfd"]]],[11,R[57],E,E,11,[[],["rawfd"]]],[11,R[57],E,E,12,[[],["rawfd"]]],[11,R[57],E,E,13,[[],["rawfd"]]],[11,R[58],"mio",E,2,[[["self"]],["rawfd"]]],[11,R[58],R[51],E,8,[[["self"]],["rawfd"]]],[11,R[58],E,E,9,[[["self"]],["rawfd"]]],[11,R[58],E,E,10,[[["self"]],["rawfd"]]],[11,R[58],E,E,11,[[["self"]],["rawfd"]]],[11,R[58],E,E,12,[[["self"]],["rawfd"]]],[11,R[58],E,E,13,[[["self"]],["rawfd"]]],[11,R[59],E,E,8,[[["rawfd"]],[R[13]]]],[11,R[59],E,E,9,[[["rawfd"]],[R[16]]]],[11,R[59],E,E,10,[[["rawfd"]],[R[26]]]],[11,R[59],E,"Converts a `std` `RawFd` to a `mio` `UnixDatagram`.",11,[[["rawfd"]],[R[31]]]],[11,R[59],E,"Converts a `std` `RawFd` to a `mio` `UnixListener`.",12,[[["rawfd"]],[R[36]]]],[11,R[59],E,"Converts a `std` `RawFd` to a `mio` `UnixStream`.",13,[[["rawfd"]],[R[39]]]],[11,"is_unnamed",R[49],"Returns `true` if the address is unnamed.",15,[[["self"]],["bool"]]],[11,"as_pathname",E,"Returns the contents of this address if it is a `pathname`…",15,[[["self"]],[[R[25],["path"]],["path"]]]]],"p":[[3,"Token"],[3,R[60]],[3,"Poll"],[3,R[61]],[3,"Waker"],[3,"Event"],[3,"Events"],[8,"Source"],[3,R[62]],[3,R[63]],[3,R[64]],[3,R[65]],[3,R[66]],[3,R[67]],[3,R[68]],[3,R[69]],[3,"Iter"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);