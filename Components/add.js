import React from "react";

import {
	
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
    FlatList
} from "react-native";
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Permissions } from "expo";

export default class add extends React.Component {
    componentDidMount() {
		Permissions.askAsync(Permissions.CAMERA_ROLL);
	}

	state = {
		selectedIndex: 0,
		uri: []
	};

	componentWillMount() {
		CameraRollPicker.getPhotos({
			assetType: "Photos",
			first: 200
		})
			.then(results => {
				console.log("Done");
				console.log(results);
				var loop = [];
				for (let i = 0; i < results.edges.length; i++) {
					var uri = results.edges[i].node.image.uri;
					loop.push(uri);
				}

				console.log(uri);
				this.setState({ uri: loop });
			})
			.catch(error => {
				console.log("Error");
				console.log(ettor);
			});
		console.log("Hello!");
    }
    render() {
		return (
			<View>
				<FlatList
					numColumns={4}
					contentContainerStyle={styles.container}
					data={this.state.uri}
					renderItem={({ item, index }) => {
						return (
							<View>
								<TouchableOpacity
									onPress={() => {
										this.props.navigation.navigate("Next", {
											uri: item
										});
									}}
								>
									<Image
										style={{ width: 100, height: 100 }}
										source={{ uri: item }}
									/>
								</TouchableOpacity>
							</View>
						);
					}}
				></FlatList>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#9AECDB",
		alignItems: "center",
		justifyContent: "center"
	}
});

