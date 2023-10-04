passport.use(new LocalStrategy(
    (username, password, done) => {
        // Implement your own logic to verify the user's credentials
        // Example: check against a database
        if (username === 'user' && password === 'password') {
            return done(null, { id: 1, username: 'user' });
        } else {
            return done(null, false, { message: 'Invalid credentials' });
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Implement your own logic to fetch the user by ID
    // Example: query a database
    const user = { id: 1, username: 'user' };
    done(null, user);
});
