use crate::{event, poll, Interest, Registry, Token};

use std::io;
use std::os::unix::io::RawFd;

/// Adapter for [`RawFd`] providing an [`event::Source`] implementation.
///
/// `SourceFd` enables registering any type with an FD with [`Poll`].
///
/// While only implementations for TCP and UDP are provided, Mio supports
/// registering any FD that can be registered with the underlying OS selector.
/// `SourceFd` provides the necessary bridge.
///
/// Note that `SourceFd` takes a `&RawFd`. This is because `SourceFd` **does
/// not** take ownership of the FD. Specifically, it will not manage any
/// lifecycle related operations, such as closing the FD on drop. It is expected
/// that the `SourceFd` is constructed right before a call to
/// [`Registry::register`]. See the examples for more detail.
///
/// [`event::Source`]: crate::event::Source
/// [`Poll`]: crate::Poll
/// [`Registry::register`]: crate::Registry::register
///
/// # Examples
///
/// Basic usage.
///
/// ```
/// # use std::error::Error;
/// # fn main() -> Result<(), Box<dyn Error>> {
/// use mio::{Interest, Poll, Token};
/// use mio::unix::SourceFd;
///
/// use std::os::unix::io::AsRawFd;
/// use std::net::TcpListener;
///
/// // Bind a std listener
/// let listener = TcpListener::bind("127.0.0.1:0")?;
///
/// let poll = Poll::new()?;
///
/// // Register the listener
/// poll.registry().register(
///     &mut SourceFd(&listener.as_raw_fd()),
///     Token(0),
///     Interest::READABLE)?;
/// #     Ok(())
/// # }
/// ```
///
/// Implementing [`event::Source`] for a custom type backed by a [`RawFd`].
///
/// ```
/// use mio::{event, Interest, Registry, Token};
/// use mio::unix::SourceFd;
///
/// use std::os::unix::io::RawFd;
/// use std::io;
///
/// # #[allow(dead_code)]
/// pub struct MyIo {
///     fd: RawFd,
/// }
///
/// impl event::Source for MyIo {
///     fn register(&mut self, registry: &Registry, token: Token, interests: Interest)
///         -> io::Result<()>
///     {
///         SourceFd(&self.fd).register(registry, token, interests)
///     }
///
///     fn reregister(&mut self, registry: &Registry, token: Token, interests: Interest)
///         -> io::Result<()>
///     {
///         SourceFd(&self.fd).reregister(registry, token, interests)
///     }
///
///     fn deregister(&mut self, registry: &Registry) -> io::Result<()> {
///         SourceFd(&self.fd).deregister(registry)
///     }
/// }
/// ```
#[derive(Debug)]
pub struct SourceFd<'a>(pub &'a RawFd);

impl<'a> event::Source for SourceFd<'a> {
    fn register(
        &mut self,
        registry: &Registry,
        token: Token,
        interests: Interest,
    ) -> io::Result<()> {
        poll::selector(registry).register(*self.0, token, interests)
    }

    fn reregister(
        &mut self,
        registry: &Registry,
        token: Token,
        interests: Interest,
    ) -> io::Result<()> {
        poll::selector(registry).reregister(*self.0, token, interests)
    }

    fn deregister(&mut self, registry: &Registry) -> io::Result<()> {
        poll::selector(registry).deregister(*self.0)
    }
}
